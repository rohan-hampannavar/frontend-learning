# React Reconciliation

React builds a virtual DOM and diffs it against the previous one.

## Key takeaways
- Give list items a stable key
- Never use array index as key if list can reorder
- React.memo prevents reconciliation if props unchanged
