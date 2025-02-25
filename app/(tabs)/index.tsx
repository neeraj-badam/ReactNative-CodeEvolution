import { View, Text, Image, ImageBackground, ScrollView, Button } from 'react-native';
import adaptiveImg from '@/assets/images/adaptive-icon.png';

export default function App(){
  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={{flex: 1, backgroundColor:'plum', padding: 60}}>
      {/* <ScrollView> */}
        {/* <View style={{width:200, height: 200, backgroundColor: 'lightblue' }}>

        </View>
        <View style={{width:200, height: 200, backgroundColor: 'lightgreen' }}>

        </View> */}
        {/* <Text>
          <Text style={{color: 'white'}}>Hello</Text> World
        </Text> */}
        {/* Static Image */}
        {/* <Image source={adaptiveImg} style={{width: 300, height: 300}}/> */}
        {/* Remote Images can be added by specifying uri */}
        {/* <Image source={{uri:`https://picsum.photos/300`}} style={{width: 300, height: 300}}/> */}
        {/* <ImageBackground source={adaptiveImg} style={{flex:1}}>
          <Text> Image text</Text>
        </ImageBackground> */}
        {/* <Image source={adaptiveImg} style={{width: 300, height: 300}}/>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam mollitia eum ratione qui voluptas! Error, omnis. Odio temporibus consequuntur, tempora sit eos officia nihil ipsum quis pariatur, voluptatum accusamus molestiae.
          Sint, accusamus voluptas repudiandae provident minima fugit quidem totam, nostrum eligendi magnam, ratione odit quasi delectus fuga perspiciatis odio blanditiis nisi illum aliquam dolorum recusandae accusantium! Amet voluptas rem molestiae.
          Quod odit architecto fugiat tempora sapiente esse provident? Praesentium impedit sequi corrupti id? Aliquid esse culpa, tempora nemo non eligendi omnis ipsum a tempore ab eaque suscipit, earum sequi. Accusantium.
          Tempore aliquid minima molestias voluptate sed a hic exercitationem nulla nihil consequatur, quas obcaecati, ex veniam possimus ipsa consectetur tempora nisi unde, praesentium sint! Dolorum sint alias deleniti voluptas consequuntur?
          Quisquam quaerat quia doloribus asperiores unde in magnam suscipit, repudiandae quos praesentium ad vitae accusamus culpa molestiae illo quod itaque eveniet id nostrum facilis? Dolore incidunt voluptate quia reprehenderit at!
          Quia, facere. Nulla dolorem tenetur mollitia quaerat explicabo quas voluptatibus itaque est necessitatibus ducimus, vel optio non assumenda, repellat veniam omnis illum, fuga maiores nostrum. Asperiores, temporibus magni. Asperiores, cum.
          Repellendus laborum itaque quis maxime quo obcaecati tempore expedita? Ipsam accusamus rerum unde iusto sequi repellat quisquam vitae sint saepe sed numquam tempora, quae possimus odio obcaecati ipsa provident ratione.
          Consectetur ex vitae, laboriosam tenetur quasi sint ab laudantium placeat qui dolores tempore rerum nihil. Accusamus, adipisci quasi, quisquam repellendus quis asperiores velit, enim facilis saepe consequatur quaerat nobis ipsum.
          Esse, illo nemo a eius vitae id sit soluta? Expedita commodi odio distinctio. Laborum, perferendis natus! Voluptatum suscipit ipsam soluta eum assumenda quod quidem cumque architecto cupiditate numquam, maxime omnis!
          Quo et aut harum molestias architecto natus in dignissimos eum! Repudiandae explicabo a necessitatibus exercitationem quasi ab recusandae, cumque quis aliquam officia alias maiores dicta ratione impedit quas doloremque officiis!
        </Text>
        <Image source={adaptiveImg} style={{width: 300, height: 300}}/>
      </ScrollView> */}

      <Button title='Press' onPress={handlePress} color='midnightblue' disabled/>
    </View>
  );
}