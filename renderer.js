var draft_editor = new SimpleMDE({
    element : document.getElementById('draft_editor')
    , forceSync: true
    , tabSize: 4
    , autosave: {
        enabled: true
        , delay: 10000
        , uniqueId: 'e529f9d4-6d97-409f-b22f-026130641570'
    }
});

window.api.receive('fromMain', (data) => {
    console.log(`Received ${data} from main process`);
});

window.api.send('toMain', 'some data');
