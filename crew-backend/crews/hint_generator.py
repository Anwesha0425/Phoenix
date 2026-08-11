from crewai import Agent, Task, Crew, Process
from llm_factory import get_crewai_llm
import os

class HintGeneratorCrew:
    def __init__(self, llm_provider: str = "gemini"):
        self.llm = get_crewai_llm(provider=llm_provider, temperature=0.2)

    def run(self, code: str, problem_description: str, language: str) -> str:
        # Define Agents
        code_reviewer = Agent(
            role='Senior Code Reviewer',
            goal='Analyze the student code and find logical, syntax, or efficiency errors.',
            backstory='An expert software engineer with years of experience debugging competitive programming solutions.',
            verbose=True,
            allow_delegation=False,
            llm=self.llm
        )

        tutor = Agent(
            role='Pedagogical Tutor',
            goal='Provide a helpful, educational hint to the student without giving away the direct answer.',
            backstory='An empathetic computer science professor who wants students to learn by figuring out the missing piece themselves.',
            verbose=True,
            allow_delegation=False,
            llm=self.llm
        )

        # Define Tasks
        review_task = Task(
            description=(
                f"Review the following {language} code for this problem:\n"
                f"Problem: {problem_description}\n\n"
                f"Code:\n{code}\n\n"
                "Identify why the code fails or is sub-optimal. Provide a clear list of issues."
            ),
            expected_output="A detailed list of logical or syntax errors found in the code.",
            agent=code_reviewer
        )

        hint_task = Task(
            description=(
                "Based on the Code Reviewer's findings, craft a single, short, guiding hint for the student. "
                "Do NOT write the corrected code for them. Ask a guiding question or point out the conceptual flaw."
            ),
            expected_output="A short, encouraging, pedagogical hint in markdown.",
            agent=tutor
        )

        # Form the Crew
        crew = Crew(
            agents=[code_reviewer, tutor],
            tasks=[review_task, hint_task],
            process=Process.sequential
        )

        # Execute
        result = crew.kickoff()
        return str(result)
