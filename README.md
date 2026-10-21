# Productive Failure Tutor

An agent skill for learning concepts through Manu Kapur’s Productive Failure approach: try a problem, build understanding from your attempts, then apply it to a new problem. Optional HTML artifacts support interactive learning.

## Install

Run this in the project where you want to learn:

```sh
npx skills add dothackerman/productive-failure --skill productive-failure
```

The [skills CLI](https://github.com/vercel-labs/skills) requires Node.js and network access. Follow its prompts to select an agent. Add `-g` to install across projects or `--agent codex` to select a host.

For manual installation, copy or symlink `skills/productive-failure/` into `.agents/skills/productive-failure` in your learning project, or `~/.agents/skills/productive-failure` for personal use. Keep the clone in place if you use a symlink.

## Use

Invoke the skill explicitly. In Codex:

```text
Use $productive-failure to help me understand Bayesian updating.
Use ./learning/bayes as the learning workspace.
```

In Claude Code:

```text
/productive-failure Help me understand Bayesian updating. Use ./learning/bayes as the learning workspace.
```

The tutor records progress in your chosen workspace. It needs an agent that can read the bundled files and write learning records. Provide sources or use a host with research tools when the topic requires research. HTML artifacts require browser checks; use text tutoring when those checks are unavailable.

Use `CONSOLIDATE NOW` to move from attempts to explanation, `DIRECT INSTRUCTION` to request direct teaching, and `LEDGER` to inspect progress. See [all controls](skills/productive-failure/SKILL.md#user-controls).

Automatic invocation is disabled in Codex and Claude Code. Other hosts may handle invocation differently; compatibility has not been verified across all hosts.

## Research and credit

Based on Productive Failure by **Manu Kapur and collaborators**, with tutoring architecture inspired by **StratL**. See [research foundations](skills/productive-failure/references/pf-foundations.md#research-sources-and-their-influence) for sources, author credits, and implementation differences. The cited studies did not evaluate this skill.

## Contribute

Edit the skill in `skills/productive-failure/`. Run the relevant [behavioral scenarios](evals/scenarios.md) in fresh temporary workspaces outside this repository. Check responses, learning records, and generated HTML source for premature answers and unsupported learning claims. Verify explicit invocation and relative file links. There is no automated test harness or CI.

To package the committed skill with its license and notices:

```sh
git archive --format=zip --output=productive-failure.zip HEAD LICENSE NOTICE skills/productive-failure
```

## License

Copyright 2026 dothackerman. [Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for attribution and research acknowledgments.
