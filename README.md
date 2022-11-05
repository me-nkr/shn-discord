# shn-discord
Discord API hackathon

# Create your own bot and add it to Team302 server
- [Setup your bot](https://discord.com/developers/docs/getting-started#creating-an-app)
- copy app id
- copy bot token

# Steps to develop 
- clone this repository with `git clone https://github.com/me-nkr/shn-discord`
- goto mail to find mail inviting you as collaborator to this repo
- cd into this repository `cd shn-discord`
- install dependencies `npm i`
- create a file named *.env*
- add the following to .env
    ```
    TOKEN=<your bot token>
    CLIEN_ID=<your app id>
    ```
- run the code `npm run dev`
- once you see the message ready, you're good to go

# Folder structure

> .env -> environment vaiables

> .gitignore -> git ignore file ( Don't modify )
    

> README.md -> Readme file for documentation

> app.js -> main entry file ( Don't modify )

> package.json -> npm config file ( Don't modify )

> package-lock.json -> npm config file ( Don't modify )


> commands/ -> command logic files

> utils/ -> utility files directory ( Don't change existing files, you may add files if confident )

> events/ -> discord event configurations ( Don't modify existing files unless you know what you're doing )

> node_modules/ -> node modules files ( Just ignore the whole thing )

# Add commands

> look at *commands/work* for example with documentation.

- add a file with name of command to *commands* directory `touch commands/<exampleCommandName>`
- in *commands/index.js* add a line `commands.<exampleCommandName> = require('./<exampleCommandName>')`
- look at other command fies and try writing a command logic in *<exampleCommandName>*
- once command logic is written, save the file, look at the terminal to see **Ready**
- when ready go to discord server and try your newley created command


# Additional Instructions
- update which file you are working on in status channel of Team 302 discord server
- don't work on same file simultaneously
- once a command is written, test is on discord and verify it is working
- only after verification commit the changes and push the code and update the status in discord server
- make sure to write clear and understandable commit messages
