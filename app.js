



window.onload = function() {
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let extra = ['.es','.com', '.net' ];

    let dom = (pronoun, adj, noun, extra) => {
        for (let h = 0; h < pronoun.length; h++) {
            for (let i = 0; i < adj.length; i++) {
                for (let j = 0; j< noun.length; j++){
                    for (let k=0; k < extra.length; k++) {
                        console.log(`${pronoun[h]}${adj[i]}${noun[j]}${extra[k]}`);

                    }
                }
            }
        }
    }


dom(pronoun, adj, noun, extra);
};
