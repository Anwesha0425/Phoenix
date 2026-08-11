from crewai import Agent, Task, Crew, Process
from llm_factory import get_crewai_llm
import os

class ProblemGeneratorCrew:
    def __init__(self, llm_provider: str = "gemini"):
        self.llm = get_crewai_llm(provider=llm_provider, temperature=0.7)

    def run(self, topic: str, difficulty: str, platform_style: str) -> str:
        problem_creator = Agent(
            role='Competitive Programming Setter',
            goal=f'Create a high-quality {difficulty} coding problem about {topic} in the style of {platform_style}.',
            backstory='An experienced competitive programming problem setter who writes engaging and mathematically sound problems.',
            verbose=True,
            allow_delegation=False,
            llm=self.llm
        )

        testcase_generator = Agent(
            role='Test Case Engineer',
            goal='Generate robust input/output test cases for the problem.',
            backstory='A meticulous QA engineer who ensures all edge cases (large inputs, zeros, negatives) are covered.',
            verbose=True,
            allow_delegation=False,
            llm=self.llm
        )

        create_task = Task(
            description=(
                f"Draft a full competitive programming problem description for a {difficulty} problem about {topic}. "
                f"The problem should perfectly mimic the formatting, tone, and constraints of {platform_style}. "
                "Include a story/context, input format, output format, and constraints."
            ),
            expected_output="A full markdown description of the coding problem.",
            agent=problem_creator
        )

        testcase_task = Task(
            description=(
                "Based on the generated problem, create 3 sample test cases (input and expected output) "
                "and explain the logic for the first test case. Append this to the problem description."
            ),
            expected_output="The final markdown problem description including sample test cases and explanations.",
            agent=testcase_generator
        )

        crew = Crew(
            agents=[problem_creator, testcase_generator],
            tasks=[create_task, testcase_task],
            process=Process.sequential
        )

        result = crew.kickoff()
        return str(result)
