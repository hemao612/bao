import * as React from 'react';
import Timeline from "react-native-timeline-flatlist";
import {Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Input, Overlay, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import moment from 'moment';
import {getTimelineList, submitTimeline} from "../service/TimelineService";

export default class TimelineScreen extends React.Component {

  state = {
    showNewModal: false,
    showDatePicker: false,
    newTitle: null,
    newDescription: null,
    newDate: null,
    timelineData: [
      {date: '2020-2-19', title: '哥宝的话v0.1版本诞生', description: '宝宝的生日', circleColor: '#004688'},
      {date: '2019-5-17', title: '在一起', description: '看完电影后'}
    ]
  };

  componentDidMount() {
    getTimelineList().then(result => {
      this.setState({timelineData: result.data});
    })
  }

  newTimeline = () => {
    this.setState({showNewModal: true})
  };

  onDateChange = (event) => {
    if (event.type === "set") {
      const {timestamp} = event.nativeEvent;
      const newDate = new Date(timestamp);
      const formatDate = new moment(newDate).format('YYYY-MM-DD');
      this.setState({newDate: formatDate, showDatePicker: false});
    }
  };

  onTitleChange = event => {
    const {text} = event.nativeEvent;
    this.setState({newTitle: text});
  };

  onDesChange = event => {
    const {text} = event.nativeEvent;
    this.setState({newDescription: text});
  };

  confirmSubmit = async () => {
    const {newTitle, newDate, newDescription} = this.state;
    await submitTimeline(newTitle, newDescription, newDate, "1");
    this.setState({showNewModal: false});
    const {data} = await getTimelineList();
    this.setState({timelineData: data});
  };

  render() {
    const {showNewModal, showDatePicker, newTitle, newDescription, newDate, timelineData} = this.state;
    let dateTitle = "选择宝宝时间";
    if (newDate != null) {
      dateTitle = newDate;
    }

    const data = timelineData.map(timeline => {
      return {...timeline, time: timeline.date}
    });

    return (
      <View style={{height: "100%"}}>
        <Timeline
          circleSize={20}
          timeContainerStyle={{minWidth: 100, marginTop: -5}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
            marginTop: 3
          }}
          descriptionStyle={{color: 'gray'}}
          options={{style: {paddingTop: 30}}}
          data={data}
        />
        <Overlay
          isVisible={showNewModal}>
          <View style={{marginTop: 22, backgroundColor: 'white'}}>
            <View style={{paddingHorizontal: 20}}>
              {showDatePicker &&
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={new Date()}
                // mode={mode}
                is24Hour={true}
                display="default"
                onChange={this.onDateChange}
              />
              }
              <Input label="宝宝的主题" containerStyle={{paddingBottom: 25}} onChange={this.onTitleChange}/>
              <Input label="宝宝描述" containerStyle={{paddingBottom: 50}}
                     inputStyle={{multiline: true, numberOfLines: 3}}
                     onChange={this.onDesChange}/>
              <Button
                title={dateTitle}
                type="outline"
                onPress={() => this.setState({showDatePicker: true})}
              />

              <View flexDirection="row" justifyContent="space-around" style={{marginTop: 90}}>
                <Button
                  disabled={!(newTitle && newDescription && newDescription)}
                  title="确定"
                  onPress={this.confirmSubmit}
                />
                <Button
                  onPress={() => this.setState({showNewModal: false})}
                  title="取消"
                />
              </View>
            </View>
          </View>
        </Overlay>
        <View style={{padding: 30, justifyContent: "flex-end"}}>
          <Icon
            onPress={this.newTimeline}
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
          />
        </View>
      </View>
    );
  }
}