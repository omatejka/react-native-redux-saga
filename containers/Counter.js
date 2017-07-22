import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as counterActionCreators from '../actions/CounterActions';

class Counter extends Component {
  render() {
    const { counter, actions } = this.props;
    return (
      <View style={styles.container}>
        <Text>Counter</Text>
        { counter.loading ? <ActivityIndicator /> : <Text>{counter.count}</Text>}
        <Button disabled={counter.loading} onPress={actions.increment} title="Increase" />
        <Button disabled={counter.loading} onPress={actions.decrement} title="Decrease" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function select(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(counterActionCreators, dispatch) }
}

export default connect(select, mapDispatchToProps)(Counter);