# Project Rules for Hotel RB Palace

## 🧠 Continuous Obsidian Vault Memory Management

- **Obsidian Memory Vault Path**: `/Users/ayushagrawal/Documents/Project/Project_Vaults/HotelRBPalace_Website_Vault`
- **Rule**: Whenever you modify code, implement new features, add components, change styling tokens, update routes, or alter data schemas, you **MUST ALWAYS** update the corresponding Obsidian notes in the vault above.
- **Git Synchronization Rule**: Whenever a `git pull`, `git merge`, or `git checkout` operation is detected or executed, inspect the updated files and immediately record the changes into `05_Memory_and_Decisions/09_Development_History_and_Milestones.md` and any relevant component notes.
- **Key Notes to Maintain**:
  - `00_Master_Map_of_Content.md`: Keep graph links updated.
  - `01_Project_Overview/02_Tech_Stack_and_Architecture.md`: Update dependencies or build configs.
  - `02_Codebase_Map/03_Component_Hierarchy.md`: Log new or modified components.
  - `02_Codebase_Map/04_Data_Models_and_Types.md`: Log schema updates to `rooms.ts` or `room.ts`.
  - `05_Memory_and_Decisions/08_Architecture_Decisions_Log_ADR.md`: Log new architectural choices as ADRs.
  - `05_Memory_and_Decisions/09_Development_History_and_Milestones.md`: Maintain the continuous development timeline.
  - `06_Future_Roadmap/11_AI_Agent_Fast_Onboarding.md`: Keep file cheatsheets and verification commands accurate.

## 🛑 Strict Git Branch & Workflow Directive

- **Branch Constraint**: Perform all code edits and development exclusively within feature branch `rb-palace-b3`.
- **No Automatic Commit / Push / Merge**: DO NOT run `git commit`, `git push`, or `git checkout main / git merge` automatically. The user will manually review, commit, push, and merge all changes.
