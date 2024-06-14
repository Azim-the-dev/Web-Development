<h1 align="center">GitHub Commands</h1>
<br/>

![](https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png)

## Commonly used commands

### Create a new repository on the command line
```sh
git init
```
```sh
git add README.md
```
```sh
git commit -m "first commit"
```
```sh
git branch -M main
```
```sh
git remote add origin https://github.com/Azim-me/Test-Repo.git
```
```sh
git push -u origin main
```
### Push an existing repository from the command line
```sh
git remote add origin https://github.com/Azim-me/Test-Repo.git
```
```sh
git branch -M main
```
```sh
git push -u origin main
```

### More commands

Configuring user information.

```sh
git config --global user.name “Sk Azim”
```
```sh
git config --global user.email “skazimxme@gmail.com”
```
check status
```sh
git status 
```
clone repository
```sh
git clone [URL]
```

## Git Branches

> -d id normal flag and -D is forced flag

to check branch
```sh
git branch
```
to rename branch
```sh
git branch -m main
```
to create new branch
```sh
git checkout -b [new branch name]
```
to navigate
```sh
git checkout [branch name]
```
to delete branch
```sh
git checkout -d [branch name]
```

## Merging Code

to compare commits, branches, files & more
```sh
git diff [branch name]
```
to merge 2 branches
```sh
git merge [branch name]
```
<h3 align="center">OR</h3>
<div align="center">CREATE A PR (PULL REQUEST)</div>
<br/>

## Pull from remote repo

to fetch and download content from a remote repo to local repo
```sh
git pull origin main
```

## Fixing Mistakes

staged changes
```sh
git reset [filename]
git reset
```
commited changes (for one commit)
```sh
git reset HEAD~1
```
commited changes (for many commits)
```sh
git reset [commit hash]
```
```sh
git reset --hard [commit hash]
```

<br/>
<h3 align="center">THE END</h3>