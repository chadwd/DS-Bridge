# DS-Bridge Session #9: Component Expansion & v1.0 Polish

**Date**: TBD
**Status**: PLANNED
**Focus**: Final session - component library expansion, polish, and v1.0 preparation

---

## Objectives

This is the **final session** for the initial DS-Bridge development phase. Focus areas:

1. **Component Expansion** - Build remaining priority components
2. **Figma Code Connect** - Publish if blocker resolved
3. **Final Polish** - Documentation, testing, build verification
4. **v1.0 Preparation** - Version bump and release readiness

---

## Tasks

### Priority 1: Component Library Expansion

**Goal**: Build 2-4 additional components from the planned list.

**Components Available** (by complexity):
| Component | Complexity | Status |
|-----------|------------|--------|
| Card | ⭐⭐ | Not started |
| List | ⭐⭐ | Not started |
| Menu | ⭐⭐ | Not started |
| Expansion Panel | ⭐⭐⭐ | Not started |
| Dialog | ⭐⭐⭐ | Not started |

**Recommended Order**:
1. Card - Highly versatile, common use case
2. List - Pairs well with Card, navigation patterns
3. Menu - Completes dropdown/action patterns
4. Dialog - Modal patterns (if time permits)

**For Each Component**:
- [ ] Phase 1: `/ds-build-component ComponentName` - Interactive demo
- [ ] Review and approve demo
- [ ] Phase 2: `/ds-create-component-docs ComponentName` - Full documentation
- [ ] Verify tests pass (unit + a11y)
- [ ] Verify build succeeds

### Priority 2: Figma Code Connect Publishing

**Goal**: Publish Code Connect if lillypad blocker is resolved.

**Current Status**: Blocked (lillypad repo connected to Figma workspace)

**If Unblocked**:
- [ ] Set FIGMA_ACCESS_TOKEN environment variable
- [ ] Run `npm run figma:publish`
- [ ] Verify Code Connect appears in Figma
- [ ] Update Figma Code Connect.md with success notes
- [ ] Add more component mappings as components are built

**If Still Blocked**:
- [ ] Document current state for future session
- [ ] Note expected unblock date (post-holidays)

### Priority 3: Final Polish

**Documentation**:
- [ ] Review all component docs for consistency
- [ ] Verify all interactive demos work correctly
- [ ] Check for broken links or missing sections
- [ ] Update summary statistics in work journal

**Testing**:
- [ ] Run full test suite: `npm run test`
- [ ] Verify no accessibility violations
- [ ] Run type-check: `npm run type-check`
- [ ] Verify build: `npm run build`

**Quality Checks**:
- [ ] Run lint: `npm run lint`
- [ ] Fix any warnings or errors
- [ ] Verify dark mode works across all pages

### Priority 4: v1.0 Preparation

**Version Bump**:
- [ ] Update package.json version to 1.0.0
- [ ] Update CHANGELOG.md with v1.0.0 section
- [ ] Add release summary and highlights

**Final Verification**:
- [ ] All tests pass
- [ ] Build succeeds
- [ ] Documentation site works
- [ ] Git history clean
- [ ] All planned features complete

---

## Success Criteria

- [ ] 2-4 new components built with full documentation
- [ ] Figma Code Connect published (or documented as blocked)
- [ ] All tests passing (unit + a11y)
- [ ] Build succeeds with no warnings
- [ ] Documentation complete and consistent
- [ ] Ready for v1.0 release

---

## Files to Create/Modify

**New Components** (if building Card, List, Menu):
- `src/components/Card.vue`
- `src/components/List.vue`
- `src/components/Menu.vue`
- `tests/Card.spec.js`, `tests/Card.a11y.spec.ts`
- `tests/List.spec.js`, `tests/List.a11y.spec.ts`
- `tests/Menu.spec.js`, `tests/Menu.a11y.spec.ts`
- `docs/components/card.md`
- `docs/components/list.md`
- `docs/components/menu.md`

**Updates**:
- `src/index.ts` - New component exports
- `docs/.vitepress/config.js` - New component sidebar links
- `package.json` - Version bump
- `CHANGELOG.md` - v1.0.0 entry

---

## Notes from Previous Sessions

### Workflow Commands Available
- `/ds-build-component ComponentName` - Build component demo (Phase 1)
- `/ds-create-component-docs ComponentName` - Complete documentation (Phase 2)
- `/start-session-plan` - Create session plan
- `/done-with-session N` - Wrap up session
- `/session-knowledge-capture` - Capture session learnings

### Figma Code Connect Blocker
- lillypad repo currently connected to Figma workspace
- Requires admin access to disconnect before DS-Bridge can publish
- Expected resolution: post-holidays

### Key Decisions from Session 8
- Keep slash commands (no skill migration)
- Two-phase workflow (demo → approve → document)
- Opus for planning, Sonnet for building

---

## Component Template Usage

```bash
# Generate component scaffolding
npm run create-component Card

# Then use slash commands:
/ds-build-component Card      # Phase 1: Demo
/ds-create-component-docs Card # Phase 2: Full docs
```

---

## Session 9 Accomplishments

*(To be filled in during/after session)*

### Components Built
- TBD

### Commits This Session
- TBD

### Final Metrics
- TBD
