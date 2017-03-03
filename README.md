# Practical Git for Everyday Professional Use

[egghead.io](https://egghead.io) course by [Trevor Miller](https://egghead.io/instructors/trevor-miller).

```
git pull

// is the same as:
git fetch
git merge
```

Create and checkout branch at the same time using ```-b``` command:

```
git checkout -b branch-name
```

Switch to the last branch accessed:

```
git checkout -
```

Less editor git log

- use forward slash / to search log
- press q to exit editor
- navigate using up/down page keys
- navigate using j or k keys or d and b for paging up and down

Pass arguments to git log

```
// condense commits to a single line
git log --oneline

// show changes
git log -p

// show additions and deletions
git log --stat
```
