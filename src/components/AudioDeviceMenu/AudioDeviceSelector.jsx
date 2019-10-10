import React from "react";

import {
  withTheme,
  ModalPopupWithEntryControl, Manager
} from "@twilio/flex-ui";
import Button from "@material-ui/core/Button";
import { DeviceMenu, DeviceMenuTitle, DeviceMenuItem } from "./AudioDeviceMenuStyledComponents";

class AudioDeviceMenu extends React.Component {

  state = {
    devices: []
  }

  modalPopupRef = React.createRef();

  componentDidMount() {
    this.refreshDevices();
    navigator.mediaDevices.addEventListener('devicechange', this.refreshDevices.bind(this));
  }

  componentWillUnmount() {
    navigator.mediaDevices.removeEventListener('devicechange', this.refreshDevices.bind(this));
  }

  refreshDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(foundDevices => {
        this.setState({ devices: foundDevices });
        console.log("Audio devices refreshed");
      })
  }

  selectMenuItem = (selectedDevice) => {
    let { devices } = this.state;
    let { voiceClient } = Manager.getInstance()

    voiceClient.audio.speakerDevices.set(selectedDevice.deviceId);
    // if there are any custom audio files playing back, they would need to synchronise to this selectedDevice.deviceId, consider adding a redux store
    // e.g. 
    // audio = new Audio( "https://audio.com/sound.mp3");
    // audio.setSinkId(selectedDevice.deviceId);

    devices.forEach(item => {
      if (item.groupId === selectedDevice.groupId && item.kind === "audioinput") {
        voiceClient.audio.setInputDevice(item.deviceId);
      }
    })
    this.modalPopupRef.current.hide();
  };


  render() {
    let { theme } = this.props;
    return (
      <ModalPopupWithEntryControl
        alignRight
        autoClose
        ref={this.modalPopupRef}
        entryControl={
          <Button color="inherit" lightHover>audio device</Button>
        }>
        <DeviceMenu styleOverride={theme.UserActivityControls}>
          <DeviceMenuTitle>Select Device</DeviceMenuTitle>
          {this.state.devices.map(item => {
            if (item.kind === "audiooutput") {
              return (
                <DeviceMenuItem
                  styleOverride={theme.UserActivityControls}
                  onClick={this.selectMenuItem.bind(this, item)}
                >{item.label}</DeviceMenuItem>)
            }
          })}
        </DeviceMenu>
      </ModalPopupWithEntryControl>
    );
  }
}

export default withTheme(AudioDeviceMenu);
