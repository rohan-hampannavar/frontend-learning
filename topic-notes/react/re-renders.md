# React Re-renders - All 4 Causes

1. State change - setState called
2. Prop change - parent passes new value
3. Context change - value in Provider changed
4. Parent re-render - child re-renders unless wrapped in React.memo

## Fixes
- React.memo - memoize component
- useMemo - memoize expensive value
- useCallback - memoize function reference
- Split context into smaller providers
