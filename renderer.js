var draft_editor = new SimpleMDE({
    element : document.getElementById('draft_editor')
});

window.api.receive('fromMain', (data) => {
    console.log(`Received ${data} from main process`);
});

window.api.send('toMain', 'some data');
