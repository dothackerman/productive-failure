# Productive Failure Tutor

An agent skill for learning concepts through generation, consolidation, and transfer, based on Manu Kapur’s Productive Failure approach.

The tutor builds on the learner’s own attempts, introduces the canonical account during consolidation, and asks for independent transfer before recording a completed cycle. Optional HTML artifacts use an earthy mycelium visual style.

## Sources and acknowledgments

Productive Failure is a learning design developed by **Manu Kapur and collaborators**. This skill draws on that research, particularly having learners generate representations and solution methods before explicit instruction. Foundational sources include Kapur’s [2008 paper](https://doi.org/10.1080/07370000802212669) and [2016 account](https://doi.org/10.1080/00461520.2016.1155457).

**StratL** provided important inspiration for separating three tutoring decisions: identifying signals in the learner’s message, selecting the next pedagogical action through code, and having an LLM carry out that action. Credit belongs to **Romain Puech, Jakub Macina, Julia Chatain, Mrinmaya Sachan, and Manu Kapur**. See their [2025 paper](https://aclanthology.org/2025.findings-acl.1348/) and [original implementation](https://github.com/RomainPuech/StratL-Pedagogical-Steering-of-LLMs-for-Tutoring).

This repository adapts these influences into an agent skill. Its phase instructions, workspace records, user controls, and HTML artifacts are implementation choices in this project. This skill has not been evaluated in the cited studies. See [Productive Failure foundations](skills/productive-failure/references/pf-foundations.md) for detailed references and the relationship between the research and this implementation.

## Install in Codex

Clone this repository, then copy or symlink `skills/productive-failure` into a skill discovery directory. For project-local use, put it at `.agents/skills/productive-failure` in the project where you want to learn.

For a personal installation on Linux or macOS, from the repository root:

```sh
mkdir -p ~/.agents/skills
ln -s "$PWD/skills/productive-failure" ~/.agents/skills/productive-failure
```

If that destination already exists, inspect it before replacing it. Installation requires no build step or package dependencies. Other agent hosts must support the skill format and the file operations used by the workflow; compatibility has not been verified.

## Use

Explicitly invoke the skill, for example:

```text
Use $productive-failure to help me understand Bayesian updating.
Use ./learning/bayes as the learning workspace.
```

Automatic invocation is disabled. The tutor uses a cycle ledger to track the active phase and evidence. Learning files belong in the learner’s chosen workspace.

Controls include `CONSOLIDATE NOW`, `STAY IN GENERATION`, `DIRECT INSTRUCTION`, `SHOW THE CONTRAST`, `TRANSFER TEST`, and `LEDGER`.

## Develop and test

Edit the single skill source under `skills/productive-failure/`. Teaching references and output assets stay inside that folder. Development scenarios live in [evals/scenarios.md](evals/scenarios.md).

After meaningful changes, run the relevant scenarios manually in fresh temporary workspaces outside this repository. Give the tutor only the skill and the learner inputs needed for the case; keep expected behavior separate. Inspect responses, state files, and the full source of generated HTML for phase leakage and unsupported learning claims. Preserve explicit invocation behavior and verify relative file references before release.

The scenarios assess tutor behavior; they do not establish educational efficacy. This repository currently has no automated test harness or CI.

## Package

From the repository root, verify that the bundled legal files match the repository copies, then create an archive containing the installable skill:

```sh
cmp LICENSE skills/productive-failure/LICENSE &&
cmp NOTICE skills/productive-failure/NOTICE &&
(cd skills && zip -r ../productive-failure.zip productive-failure)
```

The skill folder includes regular copies of `LICENSE` and `NOTICE`, so both archive packaging and direct folder installation retain them. Keep those copies identical to the root files when editing licensing or attribution. The archive also includes the [external-source review](skills/productive-failure/THIRD_PARTY.md).

## Layout

- `skills/productive-failure/`: installable instructions, references, metadata, and assets.
- `evals/scenarios.md`: manual behavioral regression scenarios.

## License

Copyright 2026 dothackerman. Licensed under the [Apache License, Version 2.0](LICENSE). See [NOTICE](NOTICE) for project attribution and research acknowledgments.

You may use, modify, and redistribute this project, including commercially, under the license terms. When redistributing, include the license and applicable attribution notices, retain relevant source notices, and identify modified files as required by section 4.

The licensing approach was inspired by [Impeccable](https://github.com/pbakaus/impeccable), by Paul Bakaus. See the [external-source review](skills/productive-failure/THIRD_PARTY.md) for the scope and findings of the dependency and provenance check.
