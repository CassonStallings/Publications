
            (function() {
                const cnxWindow = window.parent;
                const gcnx = cnxWindow['cnxel'];

                if (!gcnx || !gcnx.cmd) {
                    cnxWindow['cnxel'] = {};
                    cnxWindow['cnxel'].cmd = [];
                }

                window.cnx_data_elements={"ver":455110,"eu":false,"es6":true,"omid":false,"params":"?cid=62cec241-7d09-4462-afc2-f72f8d8ef40a","standalone":false,"domain":"elements.video"};
                let s = window.document.createElement('script');
                s.src = '//cds.elements.video/p/455110/elLoader.js';
                s.setAttribute('async', '1'),
                s.setAttribute('type', 'text/javascript');
                window.document.body.appendChild(s);
            })();