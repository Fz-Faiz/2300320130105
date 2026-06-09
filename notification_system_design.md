# Stage 1

## Priority Logic

Placement > Result > Event

Within same type:
newer notification wins.

## Data Structure

Min Heap of size 10

## Time Complexity

O(n log 10)

## Space Complexity

O(10)

## New Notifications

Whenever a notification arrives:

1. Calculate priority
2. Compare against heap root
3. Replace root if higher priority

This ensures top 10 is maintained efficiently.