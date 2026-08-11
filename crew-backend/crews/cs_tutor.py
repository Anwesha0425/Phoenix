from crewai import Agent, Task, Crew, Process
from llm_factory import get_crewai_llm
import os

class CSTutorCrew:
    def __init__(self, llm_provider: str = "gemini"):
        self.llm = get_crewai_llm(provider=llm_provider, temperature=0.3)
        self.context_data = self._load_cs_fundamentals()

    def _load_cs_fundamentals(self):
        try:
            # We will read the Next.js data file directly to act as our RAG context
            file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'csFundamentals.js')
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                return content
        except Exception as e:
            return "Context data not available."

    def run(self, topic: str, question: str) -> str:
        tutor_agent = Agent(
            role='Computer Science Professor',
            goal='Answer student questions accurately using the provided curriculum context.',
            backstory='A knowledgeable professor who explains complex CS topics (OS, DBMS, CN) simply using analogies.',
            verbose=True,
            allow_delegation=False,
            llm=self.llm
        )

        answer_task = Task(
            description=(
                f"You are tutoring a student on the topic of '{topic}'.\n"
                f"The student asked: '{question}'\n\n"
                "Use the following curriculum context to inform your answer. If the context doesn't cover it, use your general knowledge but keep it relevant to the topic.\n"
                f"--- Context ---\n{self.context_data[:10000]}...\n--- End Context ---\n\n"
                "Provide a clear, educational answer formatted in markdown."
            ),
            expected_output="A detailed, educational response to the student's question.",
            agent=tutor_agent
        )

        crew = Crew(
            agents=[tutor_agent],
            tasks=[answer_task],
            process=Process.sequential
        )

        result = crew.kickoff()
        return str(result)
