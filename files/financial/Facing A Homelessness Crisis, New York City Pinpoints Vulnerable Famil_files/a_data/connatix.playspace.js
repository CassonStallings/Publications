
            (function() {
                const cnxpsWindow = window.parent;
                const gcnxps = window.parent.cnxps;

                if (!gcnxps || !gcnxps.cmd) {
                    cnxpsWindow.cnxps = {};
                    cnxpsWindow.cnxps.cmd = [];
                }
                
                window.cnx_data={"ver":455109,"eu":false,"es6":true,"omid":false,"params":"","playerIds":{"1b4a69e1-8557-4d94-a55f-f2521b480bb7":"1033-1034","23d859f3-8ad5-49e4-9de2-217ce5539780":"","a508bd87-2d7f-4d4c-ad6f-1d6c4cda33d1":"20-21","4a7ea182-7921-47a6-bd50-954ebf57fc2d":"1022-1023","797bb07f-f2be-4439-8cc4-e1b8b3d76a9c":"1020-1021","f2c9a5a7-b063-46bc-8c0b-bd1cd34cbf3a":"1028-1029","a7a6ddc7-2a62-4477-a2d8-4c48d3572c90":"1024-1025","e5a50f34-8ed3-4cea-a5c7-ec92c8d22da6":"1030-1031"},"standalone":false,"domain":"connatix.com"};
                const s = window.document.createElement('script');
                s.src = '//cds.connatix.com/p/455109/psLoader.js';
                s.setAttribute('async', '1'),
                s.setAttribute('type', 'text/javascript');
                window.document.body.appendChild(s);
            })();