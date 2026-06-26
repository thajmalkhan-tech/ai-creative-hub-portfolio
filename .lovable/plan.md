## Plan to fix the mobile menu

1. **Inspect the current mobile menu behavior**
   - Review the existing `Navbar` mobile toggle/menu code and the current preview state.
   - Confirm whether the issue is the hamburger button not opening, the menu closing immediately, or menu links not navigating.

2. **Make the mobile menu more reliable on touch devices**
   - Update the hamburger button to handle touch/click consistently and prevent duplicate toggle events.
   - Ensure the button has a stable accessible state with `aria-expanded` and a clear `aria-controls` target.
   - Keep the menu open after one tap and close only when a menu item is selected or the toggle is tapped again.

3. **Verify in mobile view**
   - Test on the current narrow viewport and common mobile widths.
   - Confirm: first tap opens, second tap closes, links scroll to sections, and no immediate double-fire occurs.

4. **Scope control**
   - Only change the mobile navigation behavior in `Navbar.tsx` unless testing shows another file is directly responsible.