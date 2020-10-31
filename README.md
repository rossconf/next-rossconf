# Rossconf

## local development

We have included devcontainer for you to get started with an completely configued and ready to go NodeJS 12 development environment. 

In order to make use of this container you will need to use VSCode with the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

When you open the project in VSCode you will be asked to install the recommended plugins which inculde the remote containers plugin.

If you are connected to the remote container you can use the `Teminal -> Run Task` option to run the `npm dev` task to start the dev server. After  you have done this you can connect to [http://localhost:3000](http://localhost:3000)

If you like to get a shell on the devcontainer you can start a new bash shell. This will connect you to the devcontainer. The node user has sudo access, so you can install packages in the container if you would like them. Please note, this will not persist, so you might want to make a PR againt the Dockerfile.