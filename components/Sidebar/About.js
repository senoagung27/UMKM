import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class About extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#ffdab9' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Pariwisata online</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: '#ffdab9' }}>
          <List>
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Thumbnail source={{ uri: 'https://cdn.sribu.com/assets/media/contest_detail/2014/12/re-desain-logo-untuk-perpustakaan-nasional-republik-indonesia-54867089b79de4e691000003/ab72759a6d.png' }} />
                  <Body>
                    <Text>About Us</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Body>
                  <Text>
                    Aplikasi Pariwisata ini dibuat berbasis android yang memudahkan
              dalam View dan Input lokasi Pariwisata di daerah Malang secara online dan dapat diakses dimana saja.{"\n\n"}
                    Powered By : {"\n\n"} </Text>
                  <Grid>
                    <Col>
                      <Text>
                        .....{"\n"}
                        .....{"\n"}
                        .....{"\n"}
                      </Text>
                    </Col>
                    <Col>
                      <Text>
                        : 13.2014.1.00xxx{"\n"}
                        : 13.2014.1.00xxx{"\n"}
                        : 13.2015.1.00449{"\n\n"}
                      </Text>
                    </Col>
                  </Grid>
                  <Text style={{ fontSize: 10, textAlign: 'center', textAlignVertical: 'bottom' }}>
                    Copyright 2018
              </Text>
                </Body>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}
