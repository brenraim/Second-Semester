This is the Tron Project that I started and was not able to finish. I began making this with socket.io to host a LAN server to play a Tron game with up to four people. I was able to progress to the point where I could have other people connect to my server and I could read their key presses, which are essential to allowing them to interact and play the game. I ran into trouble attempting to manage the connected users when there is more than one connection, and I thought it would be better to use my time to program the game itself or practice making something similar, which is why I created my Snake program.

To run this program:

	have node.js and socket.io installed on your computer
	
	type the command ‘ipconfig getifaddr en1’ or ‘ipconfig getifaddr en0’
	into terminal to find your local IP address
	
	begin hosting the server by typing ‘node index.js’ into terminal after 		navigating to the files

	have someone connect to the server my going into their browser and going to 
	“INSERT IP HERE” + “:3000”  (ex. 10.13.82.43:3000)

	The open terminal will log their key presses of the W, A, S, and D keys which 	would be used to control their line in the game