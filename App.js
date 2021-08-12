import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

import HTML from 'react-native-render-html';

const CONTENT = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>

<script type="text/javascript">
  window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 'https://43bb393acd88.ngrok.io/testWizard');
  };
</script>

<div class="container">
<h2 style="text-align: center;">Self Esteem Module</h2>
<br /><br />
<div id="formio"></div>
</div>
`;

export default function App() {
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <HTML source={{ html: CONTENT }} contentWidth={contentWidth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
});