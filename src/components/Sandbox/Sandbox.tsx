export function Sandbox(): JSX.Element {
    return (
        <iframe
            src="https://codesandbox.io/embed/iframe-widget-nextwebs-3d7f3m?fontsize=14&hidenavigation=1&theme=dark&view=editor"
            style={{
                width: '100%',
                height: '500px',
                border: '0',
                borderRadius: '4px',
                overflow: 'hidden',
            }}
            title="iframe-widget-nextwebs"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    );
}
