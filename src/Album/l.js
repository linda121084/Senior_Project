import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { CardSection } from './ommo';
import {
    Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Icon, Left, Body
} from 'native-base';
import firebase from 'firebase';
class L extends Component {
    render() {
        const { url, time, txt, tag } = this.props.babyImg;
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: url }} />
                                <Body>
                                    <Text>{firebase.auth().currentUser.email}</Text>
                                    <Text note>{txt}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: url }} style={{ alignItems: 'center' ,height: 200, width: 200, flex: 1 }} />
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}

const styles = {
    viewDirection: {
        flexDirection: 'row',
    },
    txt: {
        color: '#2e2930',
        fontSize: 12
    },

    picture: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e8ecef',
        marginRight: 3,
        marginVertical: 2,
        marginHorizontal: 5,
        height: 110,
        width: 110,
        backgroundColor: 'white'
    },
};

export default L;