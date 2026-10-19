# Workspace state and evidence

The workspace makes the learning process inspectable. Keep it proportional: a one-shot cycle needs a ledger, not a miniature learning platform.

## Suggested layout

```text
MISSION.md                 # durable purpose and real application; omit for one-shot work
LEARNING-MAP.md            # multiple current targets only
RESOURCES.md               # authoritative sources and learner-provided material
NOTES.md                   # learner-owned notes; do not overwrite silently
cycles/
  0001-short-target.md     # active visible phase state and evidence ledger
learning-records/
  0001-short-target.md     # completed evidence-based record
lessons/
  0001-short-target.html   # optional retrospective artifact
reference/                 # optional durable concept summaries
assets/                    # copied or referenced skill UI assets when HTML is used
```

Create directories only when they gain a real file today. Number cycles monotonically. Use short language-neutral slugs where practical.

## Active cycle as source of truth

Create the ledger from [the cycle-ledger format](formats/cycle-ledger.md). Update it after meaningful learner evidence or a phase transition, not after every conversational acknowledgement.

The `phase` field must be one of:

- `calibration`
- `generation`
- `consolidation`
- `transfer`
- `complete`
- `direct-instruction`

When entering `direct-instruction`, set `path: direct-instruction` and add `paused_from` plus `departure_reason` to the frontmatter. If canonical target knowledge is taught, the same target cannot honestly return to Generation; finish learner reconstruction and continue to Transfer as a non-PF path. Restore `paused_from` and `path: pf` only when the mode changed before target knowledge was exposed.

Record exact learner work or faithful summaries. Clearly label tutor interpretations, designed prompts, and unattempted transfer tasks so they cannot be mistaken for learner evidence.

## Mission and map

Use [the mission format](formats/mission.md) for a durable journey. Confirm with the learner before materially changing purpose, application, available time, or challenge preference.

Use [the learning-map format](formats/learning-map.md) only when at least two targets exist. Treat sequencing as provisional and revise it from attempts and transfer evidence—not because an explanation was delivered.

## Resources and notes

Use [the resource format](formats/resources.md) for sources. Record whether a source was learner-provided or tutor-found. Research privately before task design when necessary, but do not place canonical answers into a Generation artifact or learner task.

`NOTES.md` belongs to the learner. Invite edits or append clearly attributed summaries. Preserve existing wording unless asked to revise it.

## Completed records

Create a learning record only after the cycle completion gate. Use [the learning-record format](formats/learning-record.md). Claims such as “demonstrated,” “transferred,” or “understands” must point to an actual learner response or artifact.

When evidence is incomplete, say “not yet tested,” “partially demonstrated,” or “uncertain.”

## Glossary

Use [the glossary format](formats/glossary.md) only when formal terms aid later retrieval. Add a term after the learner can explain or use it. A tutor's definition alone does not earn an entry.
