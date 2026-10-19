# Phase-safe HTML artifacts

Use HTML when interaction or spatial comparison makes conceptual structure easier to inspect. HTML is a learning instrument, not the default container for every exchange.

## Artifact timing

### Generation artifact

Create it fresh for the current cycle. It may contain:

- the problem, available information, constraints, and success conditions;
- neutral tools for constructing an RSM;
- manipulable cases, simulations, traces, or test inputs that provide situational feedback;
- learner-owned text areas with local autosave and export/copy controls.

It must not contain canonical terminology, solutions, answer keys, correctness labels, scoring, hidden comparison data, comments, scripts, or inaccessible UI states that reveal later-phase knowledge. Inspect the complete HTML, CSS, JavaScript, JSON, and DOM attributes—not merely what is visible.

### Consolidation artifact

Create a separate artifact or deliberately extend a copy only after Generation ends. Include the learner's actual RSMs, a fair affordance/constraint comparison, causal gap explanations, canonical assembly, explicit instruction, and a worked example.

### Retrospective lesson

Create only after transfer when a durable retrieval resource is useful. Preserve the learning arc:

```text
the problem → learner RSMs → exposed tensions → canonical assembly → transfer evidence → open questions
```

Do not rewrite the history so the learner appears to have known the canonical answer from the start.

## Mycelium visual system

Use `assets/mycelium.css`, `assets/pf-ui.js`, and `assets/mycelium-mark.svg`. The visual metaphor is a living underground network: ideas branch, meet constraints, exchange nutrients, and assemble into a stronger structure.

Design character:

- parchment, loam, bark, lichen, moss, clay, and ink tones;
- fine branching lines, spore-like dots, soft organic radii, and quiet depth;
- restrained motion that suggests growth rather than spectacle;
- generous reading width and typography suited to sustained reasoning;
- phase accents that remain within one earthy palette.

Avoid neon “AI” gradients, glass dashboards, gamified success colors, mushrooms as cartoons, and decorative complexity that competes with the task.

## Required HTML structure

Start Generation from `assets/phase-shell.html`, Consolidation from `assets/consolidation-shell.html`, and a completed retrospective from `assets/retrospective-shell.html`. Replace every `{{PLACEHOLDER}}`. Never use a later-phase shell to generate an earlier-phase learner artifact. Keep:

- a skip link and semantic landmarks;
- phase, target, and current task visible near the top;
- one primary task per page state;
- explicit labels and descriptions for controls;
- a single polite live region for user-requested copy/clear results; keep autosave silent to avoid screen-reader chatter on every keystroke;
- keyboard-operable interactions;
- responsive behavior and printable content;
- no network dependency for core behavior.

Use the helper script only for storage, word counts, copy/export, and disclosure controls. Do not add answer evaluation to Generation.

## Verification

Before presenting an artifact:

1. search its full source for target answers, canonical terms, answer keys, scoring, or future-phase content;
2. open it in a browser at narrow and wide viewports;
3. operate every control by keyboard;
4. verify the live region is singular and useful;
5. verify print styling keeps essential content and removes controls;
6. confirm learner input stays local unless the user explicitly authorizes another destination.

If a simulation requires canonical logic to produce situational feedback, expose only behavior the real problem situation would naturally reveal. Keep explanatory or evaluative logic out until Consolidation.
