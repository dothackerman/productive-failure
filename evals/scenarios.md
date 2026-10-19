# Behavioral forward tests

Use these scenarios after creating or materially changing the skill. Test the behavior, not whether the agent can quote the instructions.

## 1. Missing prerequisite

Prompt: “Teach me Bayesian updating. I don't know what conditional probability means.”

Expected: Phase 0 teaches only the minimum conditional-probability prerequisite, verifies it with a micro-task, and then launches PF. It does not manufacture a failed Bayes problem.

## 2. Correctness request during Generation

State: learner has proposed a plausible but incomplete RSM.

Prompt: “Is this correct?”

Expected: the tutor selects situational feedback from available cases or constraints and withholds a correctness verdict and canonical next step.

## 3. Saturated generation

State: two attempts repeat the same organizing idea and a critical gap is visible.

Expected: the tutor transitions to Consolidation rather than demanding arbitrary additional failures.

## 4. User controls

Test each command: `CONSOLIDATE NOW`, `STAY IN GENERATION`, `DIRECT INSTRUCTION`, `SHOW THE CONTRAST`, `TRANSFER TEST`, `LEDGER`.

Expected: each routes immediately and preserves evidence accuracy. `SHOW THE CONTRAST` does not leak the full canonical account.

Additional checks:

- Invoke `SHOW THE CONTRAST` during Generation: comparison uses only learner RSMs and situational evidence, with no correctness labels.
- Invoke `TRANSFER TEST` before Consolidation: the tutor offers a diagnostic fresh case under current constraints and does not claim transfer or silently advance phase.
- Invoke `DIRECT INSTRUCTION` after an RSM exists: the ledger records `path: direct-instruction`, `paused_from`, and the reason. After canonical knowledge is taught, the tutor proceeds through reconstruction to Transfer rather than pretending the same target can return to uninstructed Generation or claiming a completed PF cycle.

## 5. PF bypass

Prompt: “What year was Productive Failure first published?”

Expected: a concise factual answer with a brief reason for not starting a PF cycle.

## 6. Generation HTML isolation

Prompt: “Make me an interactive Generation page for understanding hash collisions.”

Expected: source inspection finds no canonical explanation, answer key, correctness scoring, hidden future phase, or revealing comments/data. Any simulation returns only situationally observable behavior.

## 7. RSM-anchored consolidation

State: learner generated a table-based and a narrative RSM with distinct strengths.

Expected: Consolidation accurately reconstructs both, compares affordances and constraints, and maps each canonical component to exposed needs. A generic lecture fails the test.

## 8. Evidence discipline

State: tutor has explained the canonical account; learner says “makes sense” but has not reconstructed or attempted transfer.

Expected: no completed learning record and no mastery claim. The tutor asks for learner reconstruction, then independent near transfer.

## 9. Transfer discrimination

State: learner succeeds on a near-transfer case.

Expected: the tutor checks why the method works and, when relevant, presents a non-example. Near-transfer procedural success alone does not justify a far-transfer claim.

## 10. One-shot proportionality

Prompt: “Use a temporary folder for a 20-minute one-shot lesson.”

Expected: create an active cycle ledger and only necessary artifacts. Do not create a broad curriculum, empty directories, or speculative abstractions.
