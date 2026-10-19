# Productive Failure foundations

Read this reference when explaining the method, resolving terminology, or reviewing protocol fidelity. It is not a script to present before Generation.

## Canonical sequence

Productive Failure deliberately sequences:

1. Generation and Exploration before target instruction
2. Consolidation and Knowledge Assembly
3. Application and transfer

Initial problem-solving performance and longer-term learning are different outcomes. Optimize the first phase for preparation to learn, not immediate canonical success.

PF is not unguided discovery, random guessing, indefinite withholding, a breadcrumb trail, or permission to let a learner flounder. Its productivity comes from a designed task, activated prior knowledge, meaningful RSM variation, visible critical features, situational feedback, and explicit subsequent instruction.

## Working terminology

- **Representations and Solution Methods (RSMs):** diagrams, verbal models, formulas, classifications, predictions, examples, code, algorithms, causal accounts, decision procedures, comparisons, or other ways the learner frames and attacks a problem.
- **Prior knowledge:** formal knowledge, intuition, experience, analogies, representations, procedures, and partial ideas already available to the learner.
- **Critical conceptual features:** properties, relationships, constraints, boundary conditions, and requirements needed for the target concept to work.
- **Affordances:** what an RSM makes possible or especially visible.
- **Constraints:** what an RSM hides, distorts, omits, or cannot handle.
- **Suboptimal solution:** a serious attempt with useful components that does not yet meet the complete target account.
- **Situational feedback:** evidence available from the problem environment rather than a tutor's correctness verdict.
- **Canonical account:** the accepted concept, representation, method, procedure, or expert explanation assembled during Consolidation.
- **Conceptual understanding:** an ability to explain why the account works, why its parts are necessary, and where it applies.
- **Near transfer:** applying the structure to a problem with different surface details but close underlying demands.
- **Far transfer:** recognizing and using the structure in a less obvious context.
- **Discrimination:** recognizing when the concept should not be used.

## Four mechanisms to design for

1. **Activate and differentiate prior knowledge.** Surface relevant and irrelevant intuitions and what each accomplishes.
2. **Notice critical conceptual features.** Let the task make important relationships, constraints, and edge cases consequential.
3. **Explain and elaborate.** Require reasoning, assumptions, representations, predictions, and interpretation—not unsupported answers.
4. **Organize and assemble.** Connect useful components and exposed gaps into the canonical account during Consolidation.

## Research sources and their influence

Productive Failure is a learning design developed by Manu Kapur and collaborators. The following works provide the research foundations and architectural inspiration for this skill.

### Productive Failure

Kapur, M. (2008). [Productive Failure](https://doi.org/10.1080/07370000802212669). *Cognition and Instruction*, 26(3), 379–424.

This work grounds the skill’s sequence of learner generation and exploration before explicit instruction, and its emphasis on learner-generated representations and solution methods as material for subsequent consolidation.

Kapur, M. (2016). [Examining Productive Failure, Productive Success, Unproductive Failure, and Unproductive Success in Learning](https://doi.org/10.1080/00461520.2016.1155457). *Educational Psychologist*, 51(2), 289–299.

This account informs the distinction between initial problem-solving performance and subsequent learning, and the emphasis on designing productive preparation for instruction rather than prolonging failure for its own sake.

### StratL

Puech, R., Macina, J., Chatain, J., Sachan, M., & Kapur, M. (2025). [Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure](https://doi.org/10.18653/v1/2025.findings-acl.1348). *Findings of the Association for Computational Linguistics: ACL 2025*, 26291–26311. [Published paper](https://aclanthology.org/2025.findings-acl.1348/) · [Authors’ implementation](https://github.com/RomainPuech/StratL-Pedagogical-Steering-of-LLMs-for-Tutoring).

StratL inspired the separation of identifying signals in the learner’s message, selecting a pedagogical action through code, and using an LLM to perform the selected action. This is conceptual inspiration: the current skill expresses its tutoring workflow through instructions and phase routing; it does not implement StratL’s separate code-driven action selector.

## This skill’s adaptations

This repository translates these influences into an agent skill with phase instructions, workspace records, user controls, transfer checks, and optional HTML artifacts. These are implementation choices in this project, not a verbatim reproduction of either research protocol. The cited studies did not evaluate this skill, and their results should not be presented as evidence of its educational efficacy.

Use the papers for conceptual grounding. Preserve the distinction between the original research, architectural inspiration, and this implementation when explaining the skill.
