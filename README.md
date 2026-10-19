# Productive Failure Tutor

An agent skill for learning concepts through generation, consolidation, and transfer, based on Manu Kapur’s Productive Failure approach.

The tutor builds on the learner’s own attempts, introduces the canonical account during consolidation, and asks for independent transfer before recording a completed cycle. Optional HTML artifacts use an earthy mycelium visual style.

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

From the repository root, create an archive containing only the installable skill:

```sh
(cd skills && zip -r ../productive-failure.zip productive-failure)
```

## Layout

- `skills/productive-failure/`: installable instructions, references, metadata, and assets.
- `evals/scenarios.md`: manual behavioral regression scenarios.

## License

No license has been selected. Public availability does not grant a general reuse license.
