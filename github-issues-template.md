# GitHub Issues for Sessions 1 & 2

Copy and paste these into GitHub's issue creation page at:
https://github.com/chadwd/DS-Bridge/issues/new

---

## Issue #1: Session 1 - GuaranteedSale Component (Initial Build)

**Title**: `Session 1: GuaranteedSale Component - Initial Build`

**Labels**: `component`, `enhancement`, `documentation`, `completed`

**Assignees**: Jake (@jake9-maker)

**Description**:

```markdown
## Session 1 Summary

**Date**: 2025-12-16 to 2025-12-17
**Status**: ✅ Completed
**Branch**: Merged to `main` (commit e3e9d17)
**Contributor**: Jake

### Objectives
- [x] Create GuaranteedSale component with 5 status states
- [x] Write comprehensive tests (unit + accessibility)
- [x] Create interactive documentation
- [x] Ensure WCAG 2.1 AAA compliance

### What Was Completed

#### Component Features
- ✅ **5 status states**: Available, Accepted, Requested, Expired, Not Available
- ✅ **Dynamic tooltips** based on status
- ✅ **Alignment modes**: Center and left
- ✅ **Interactive documentation** with live playground
- ✅ **Special handling** for "Not Available" ($-- display)
- ✅ **Status-specific colors**: green/blue/red/gray

#### Tests
- ✅ 9 unit tests (all passing)
- ✅ 4 accessibility tests (all passing)
- ✅ WCAG 2.1 AAA compliant

#### Documentation
- ✅ Interactive playground in docs
- ✅ API reference with props/events tables
- ✅ Alignment and status variation examples
- ✅ "When to Use" guidance
- ✅ Accessibility notes

#### Session Tracking
- ✅ Created `agent-sessions/jake-SESSION_1_PLAN.md`
- ✅ Created `agent-journals/jake-agent-work-journal.md`
- ✅ Updated README.md with component documentation

### Files Created (7)
- `src/components/GuaranteedSale.vue` (446 lines)
- `tests/GuaranteedSale.spec.js` (9 tests)
- `tests/GuaranteedSale.a11y.spec.ts` (4 tests)
- `docs/components/guaranteedsale.md` (243 lines)
- `agent-sessions/jake-SESSION_1_PLAN.md`
- `agent-sessions/jake-SESSION_2_PLAN.md`
- `agent-journals/jake-agent-work-journal.md`

### Files Modified (5)
- `src/components/index.ts` - Added export
- `src/index.ts` - Added export
- `docs/.vitepress/config.js` - Added to sidebar
- `docs/.vitepress/theme/index.js` - Registered component
- `README.md` - Added component documentation

### Metrics
- **Lines of Code**: 1,704 additions
- **Files Changed**: 13 files
- **Test Coverage**: 13 tests (100% passing)
- **Documentation**: Interactive playground + full API reference

### Component Props (9)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| priceValue | String | '22,500' | Guaranteed sale amount |
| status | String | 'Accepted' | Status badge |
| align | String | 'center' | Layout alignment |
| showDateTime | Boolean | true | Show date/time section |
| updatedDate | String | 'Nov 3, 2025' | Updated date |
| updatedTime | String | '10:55:04' | Updated time |
| timePeriod | String | 'a.m.' | AM/PM indicator |
| timezone | String | 'EST' | Timezone |
| expiresDate | String | 'Nov 3, 2025' | Expiration date |

### Events (2)
- `primary-action` - Primary button clicked
- `secondary-action` - Secondary button clicked

### Related Files
- 📋 Session Plan: [`agent-sessions/jake-SESSION_1_PLAN.md`](../agent-sessions/jake-SESSION_1_PLAN.md)
- 📓 Work Journal: [`agent-journals/jake-agent-work-journal.md`](../agent-journals/jake-agent-work-journal.md)
- 💻 Component: [`src/components/GuaranteedSale.vue`](../src/components/GuaranteedSale.vue)
- 📚 Documentation: [`docs/components/guaranteedsale.md`](../docs/components/guaranteedsale.md)

### Demo
View the component in action: http://localhost:5173/components/guaranteedsale.html

---

**Session completed successfully! Component is production-ready and fully documented.**
```

---

## Issue #2: Session 2 - GuaranteedSale Action Button Enhancements

**Title**: `Session 2: GuaranteedSale Action Button Enhancements`

**Labels**: `component`, `enhancement`, `in-progress`

**Assignees**: Jake (@jake9-maker)

**Milestone**: v0.3.1

**Description**:

```markdown
## Session 2 Summary

**Date**: 2025-12-17
**Status**: ⏸️ Paused (Awaiting button label approval)
**Branch**: `s2-gsale-btn`
**Contributor**: Jake

### Objectives
- [ ] Enhance action buttons with dynamic labels based on component status
- [ ] Add props for button customization and flexibility
- [ ] Implement conditional button display logic
- [ ] Add loading states and disabled states
- [ ] Maintain WCAG 2.1 AAA compliance

### Progress

#### ✅ Completed
- [x] Session planning and documentation
- [x] Marked Session 1 as completed with full summary
- [x] Created SESSION_2_PLAN.md
- [x] Updated README with branching convention
- [x] Updated CLAUDE.md with branching convention
- [x] Created branch: `s2-gsale-btn`
- [x] Proposed button label strategy for all 5 status states

#### 🔄 In Progress
- [ ] Finalize button labels (awaiting user approval)
- [ ] Implement dynamic button labels based on status
- [ ] Add button customization props
- [ ] Update tests for new button behavior
- [ ] Update documentation

### Proposed Button Labels

Awaiting approval on these labels:

| Status | Primary Button | Secondary Button |
|--------|---------------|------------------|
| Available | "Accept Offer" | "Decline" |
| Accepted | "View Details" | "Contact Support" |
| Requested | "Check Status" | "Cancel Request" |
| Expired | "Request New Offer" | "View Details" |
| Not Available | Hidden or "Request Pricing" | Hidden or "Learn More" |

### Questions to Resolve
- Should "Not Available" buttons be hidden or visible?
- Do button labels match business context?
- Should we maintain mixed pattern (action vs informational buttons)?

### Proposed New Props

```typescript
interface Props {
  // Existing props...
  priceValue?: string;
  status?: StatusType;
  align?: AlignType;
  showDateTime?: boolean;
  // ... date/time props

  // NEW: Button customization
  primaryButtonText?: string;      // Override default label
  secondaryButtonText?: string;    // Override default label
  hidePrimaryButton?: boolean;     // Hide primary button
  hideSecondaryButton?: boolean;   // Hide secondary button
  primaryButtonDisabled?: boolean; // Disable primary
  secondaryButtonDisabled?: boolean; // Disable secondary
  primaryButtonLoading?: boolean;  // Show loading state
  secondaryButtonLoading?: boolean; // Show loading state
}
```

### Implementation Approach

**Option 1: Smart Defaults + Override Props** (Recommended)
- Component provides intelligent default labels based on status
- User can override with custom labels via props
- Balances convenience with flexibility
- Example: `Available` → "Accept Offer" by default, but user can pass `primaryButtonText="Custom Label"`

### Files to Modify
- `src/components/GuaranteedSale.vue` - Add button props and logic
- `tests/GuaranteedSale.spec.js` - Update tests
- `docs/components/guaranteedsale.md` - Update documentation
- `agent-sessions/jake-SESSION_2_PLAN.md` - Track progress
- `agent-journals/jake-agent-work-journal.md` - Document work

### Success Criteria
- [ ] Dynamic button labels working for all 5 status states
- [ ] Props to override button labels
- [ ] Props to hide/show buttons individually
- [ ] Loading states visually distinct
- [ ] Disabled states properly styled
- [ ] Events emit correctly for both buttons
- [ ] Unit tests updated and passing
- [ ] Documentation updated with examples
- [ ] No TypeScript errors
- [ ] WCAG 2.1 AAA compliance maintained

### Related Files
- 📋 Session Plan: [`agent-sessions/jake-SESSION_2_PLAN.md`](../agent-sessions/jake-SESSION_2_PLAN.md)
- 📓 Work Journal: [`agent-journals/jake-agent-work-journal.md`](../agent-journals/jake-agent-work-journal.md)
- 💻 Component: [`src/components/GuaranteedSale.vue`](../src/components/GuaranteedSale.vue)

### Context for Next Session
- Component is fully functional with 5 status states, dynamic tooltips, proper colors
- Next: Enhance action buttons with smart defaults and customization props
- Approach: Smart defaults + override props (Option 1 from SESSION_2_PLAN)

---

**Paused at**: Button label proposal stage
**Next step**: User approves labels, then implement dynamic button behavior
```

---

## Issue #3: Branching Convention Documentation

**Title**: `docs: Add branching convention and git workflow to README and CLAUDE.md`

**Labels**: `documentation`, `in-progress`

**Assignees**: Jake (@jake9-maker)

**Description**:

```markdown
## Documentation Enhancement

**Date**: 2025-12-17
**Status**: 🔄 In Progress
**Branch**: `s2-gsale-btn`
**Contributor**: Jake

### Objectives
- [x] Establish branching convention for the project
- [x] Document in README.md for all users
- [x] Document in CLAUDE.md for AI/developer guidance
- [ ] Commit and push documentation

### Convention Established

**Branch Naming Format**: `sN-component-feature`

**Pattern**: `s<session-number>-<component-name>-<feature>`

**Examples**:
- `s2-gsale-btn` - Session 2: GuaranteedSale buttons
- `s3-card-layout` - Session 3: Card component layout
- `s4-input-validation` - Session 4: Input validation

### Benefits
- ✅ **Short but contextful** - Quick to type, easy to understand
- ✅ **Session tracking** - Links to session plans in `agent-sessions/`
- ✅ **Component scoped** - Clear what part of the system is affected
- ✅ **Feature focused** - Describes what's being worked on
- ✅ **Team friendly** - Multiple people can work in parallel without conflicts

### Git Workflow Documented

1. Create branch for session work
2. Work throughout the session
3. **Commit/push at end of session** or when taking breaks
4. Create Pull Request on GitHub

**Commit Policy**:
- ✅ Commit/push at end of session
- ✅ Commit/push when taking breaks (to save progress)
- ❌ Do NOT commit after every small change

### Files Modified
- `README.md` - Added "Branching Convention" section
- `CLAUDE.md` - Added "Branching Convention" section with Git workflow

### Next Steps
- [ ] Commit these documentation changes
- [ ] Push to `s2-gsale-btn` branch
- [ ] Include in Session 2 PR

---

**This establishes the project's branching and git workflow conventions for all contributors.**
```

---

## How to Create These Issues on GitHub

1. Go to: https://github.com/chadwd/DS-Bridge/issues/new
2. Copy the **Title** from above
3. Copy the **Description** markdown block
4. Add the **Labels** (create them if they don't exist):
   - `component`
   - `enhancement`
   - `documentation`
   - `completed` (for Session 1)
   - `in-progress` (for Session 2)
5. Assign to yourself
6. Click "Submit new issue"

Repeat for each issue!
