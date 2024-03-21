## CLI File Manager Project
> This is a lightweight file manager built with Node.js

### Core Commands:

#### Navigation:

- `up`: Move to parent directory.
- `cd path/to/directory`: Change directory (absolute or relative path).

#### Listing:

- `ls`: List files and directories in the current directory.

#### File Operations:

- `cat path/to/file`: Read file content.
- `add new_file_name`: Create an empty file.
- `rn path/to/file new_filename`: Rename a file.
- `cp path/to/file path/to/new/directory`: Copy a file.
- `mv path/to/file path/to/new/directory`: Move a file (deletes from source).
- `rm path/to/file`: Delete a file.

#### Operating System Info:

- `os --EOL`: Get system End-of-Line character.
- `os --cpus`: Get CPU information.
- `os --homedir`: Get home directory path.
- `os --username`: Get current system username.
- `os --architecture`: Get Node.js binary architecture.

#### Hash Calculation:

- `hash path/to/file`: Calculate file hash.

#### Compression/Decompression:

- `compress path/to/file path/to/destination`: Compress a file
- `decompress path/to/file path/to/destination`: Decompress a file

### How to use:

- Ensure you have Node.js version 20 LTS installed.
- Clone this repo
- Run: `npm run start -- --username=your_username`
- Exit: Press Ctrl+C or enter `.exit`.
