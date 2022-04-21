# Git workflow for SportsLive

Follow these instructions for Code Commit and Source Control.

# Branches

**main** - Default branch, will be used for production builds\
**development** - Primary branch for app development. Feature branches will be created from this branch.\
**\<feature-branches>** - Create a branch from `development` branch for each task/feature you want to implement and once the work is complete, create a Pull Request (PR) to merge it back in development branch.

## Creating branches

### Create a branch locally using VS Code. (Option 1)

1. Make sure your working directory is clean (stage or stash all files)
2. On the bottom left corner of taskbar, click on the button displaying the current branch. A list will appear with all branch names. 
3. Click on the second option `Create a new branch from...`
4. Enter new branch name.
5. Select `development` branch to create the new branch from this branch.

That's it!
Your new branch is now created locally, now you can make changes and publish this branch to remote (GitHub) by clicking the cloud icon with up arrow on the taskbar.

### Create branch on GitHub (Option 2)

1. Open the GitHub repo in a browser.
2. Click on the button displaying `main` branch
3. Select `development` branch.
4. Again click on the button displaying the branch and type name for the new branch.
5. Click on `Create branch <new-branch-name>: from development`

The new branch is created on the remote repository.\
To sync your local repo with the remote use: `git fetch`

# Commits

Any changes you made locally must be available to the rest of the team.
Create a commit when - 

- A specific module is completed
- Working function is implemented
- at EOD 

Always write a short meaningful message when creating a commit describing what changes are made in that commit.
> Don't commit very small changes

## Creating a commit

Once you've made the desirable changes to all the files, follow these steps: 

 1. Select `Source Control` tab from the left side of the VS Code editor. (Ctrl + shift + G G)
 2. Stage the files you want to commit by clicking the ==+== icon next to them.
 3. On the top, Add a commit message.
 4. Click the :white_check_mark: icon to  create a commit.

## Syncing changes

Once you make a commit locally, you have to push those changes to remote or you want to pull changes made by others.

Click on the button which appears on the `Source Control` tab after making a commit.\
Or \
You can click on the sync icon with :arrow_down: :arrow_up: to sync the changes.
