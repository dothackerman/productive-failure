# External sources and dependency review

Reviewed on 2026-10-21. This is a record of the materials inspected, not a guarantee of provenance or a legal opinion.

## Bundled files and runtime dependencies

The installable skill consists of Markdown instructions and references, YAML metadata, three HTML templates, one CSS stylesheet, one JavaScript helper, and one SVG mark, together with its legal files and this review. No package manifest, lockfile, vendored library, font file, or third-party image was found.

The HTML templates reference the bundled CSS and JavaScript through `{{ASSET_PATH}}`. The JavaScript uses browser APIs for local storage, text counts, clipboard access, and DOM events. No external imports, CDN resources, remote font requests, or network calls were found in the bundled assets. CSS font names select fonts available on the reader's system; the skill does not distribute or download them. The SVG uses local shapes and a local gradient; its XML namespace URL is not a downloaded resource.

Running the skill requires a compatible agent host and its file tools; topic research may use that host's browsing tools. The skill does not bundle an agent host, model, API client, or research service. Such services have their own terms. Learner-provided materials and sources introduced in future lessons require their own reuse checks.

## Research foundations

The citations and conceptual influences are documented in [Productive Failure foundations](references/pf-foundations.md) and acknowledged in [NOTICE](NOTICE). No paper PDF, publisher figure, or research dataset is bundled. The phase and task references describe the teaching approach rather than reproducing a paper. The project's Apache license grants rights in this project's contributions; it does not relicense the cited publications or claim ownership of the underlying teaching method.

## StratL

Inspected the [authors' implementation at commit 068eee8](https://github.com/RomainPuech/StratL-Pedagogical-Steering-of-LLMs-for-Tutoring/tree/068eee895e15f0faa85b507aa90525326b8576ad), including its [MIT license](https://github.com/RomainPuech/StratL-Pedagogical-Steering-of-LLMs-for-Tutoring/blob/068eee895e15f0faa85b507aa90525326b8576ad/LICENSE), prompt generator, intent selection, and taxonomy.

No StratL implementation files, prompts, assets, or dependencies were identified as copied into this skill. A comparison of normalized 16-word sequences found only the cited paper title in common. This supports the existing description of StratL as conceptual inspiration; the comparison cannot establish independent authorship or rule out all adaptations. Its Python, OpenAI, and Streamlit dependencies are not dependencies of this skill. No StratL MIT license copy is included because no bundled StratL material was identified. If such material is added later, retain its copyright and full MIT permission notice.

## Impeccable

The choice of Apache 2.0 was inspired by Paul Bakaus's [Impeccable at commit dad8dbb](https://github.com/pbakaus/impeccable/tree/dad8dbb3aac21ad1fa236c110315ef4abece23e8). Inspected its [Apache 2.0 license](https://github.com/pbakaus/impeccable/blob/dad8dbb3aac21ad1fa236c110315ef4abece23e8/LICENSE) and [NOTICE.md](https://github.com/pbakaus/impeccable/blob/dad8dbb3aac21ad1fa236c110315ef4abece23e8/NOTICE.md). That notice concerns platform design references derived from ehmo's MIT-licensed platform-design-skills.

No Impeccable or platform-design-skills content was identified as bundled here. A comparison of normalized 16-word sequences against the checked-out Impeccable text files found only common HTML document metadata. Impeccable is not a runtime dependency, and its third-party platform references are not included. This project's license text comes from the [Apache Software Foundation's standard text](https://www.apache.org/licenses/LICENSE-2.0.txt), rather than copying Impeccable's copyright statement.

## Maintenance

Preserve applicable upstream licenses and attribution when adding third-party code, text, fonts, images, or other assets. Record the source, version or commit, license, and local files affected here. An acknowledgment alone does not replace license compliance. Keep `LICENSE` and `NOTICE` in the installed skill folder and its distributed archive.
