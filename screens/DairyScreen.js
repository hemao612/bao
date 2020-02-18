import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { List } from '@ant-design/react-native';
const Item = List.Item;
const Brief = Item.Brief;

export default class DairyScreen extends React.Component{
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={'2020-2-19'}>
          <Item wrap>
            哥哥：宝宝生日快乐！这是哥哥和宝宝过的第一个生日，之后还会有很多很多生日咱们会一起过。
            这是哥哥送给宝宝的生日礼物，由于想到这个主意的时间比较晚，界面都还不完善也不漂亮，功能
            也只有时间线功能可以用，但是随着咱们以后长长久久，这个app的功能一定会越来越多越来越完善。
            这几天晚上和宝宝说我在忙工作的事，然后也没有视频，其实是在准备这个东西，宝宝不要觉得被冷落了，
            咱们会一起长长久久的。祝宝宝生日快乐！
          </Item>
          {/*<Item*/}
          {/*  wrap*/}
          {/*  extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"*/}
          {/*  multipleLine*/}
          {/*  align="top"*/}
          {/*  arrow="horizontal"*/}
          {/*>*/}
          {/*  顶部对齐*/}
          {/*  <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>*/}
          {/*  <Brief>辅助文字内容</Brief>*/}
          {/*</Item>*/}
          {/*<Item*/}
          {/*  extra={*/}
          {/*    <View>*/}
          {/*      内容内容*/}
          {/*      <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>*/}
          {/*    </View>*/}
          {/*  }*/}
          {/*  multipleLine*/}
          {/*  align="bottom"*/}
          {/*>*/}
          {/*  底部对齐*/}
          {/*</Item>*/}
        </List>
      </ScrollView>
    );
  }
}