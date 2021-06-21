process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd == 'pwd') {
        require('./pwd.js');
    }else if(cmd == 'ls'){
        require('./ls.js');
    }else if() {

    }else {
        process.stdout.write('You typed: ' + cmd);    
        process.stdout.write('\n\nprompt > ');
    }

});