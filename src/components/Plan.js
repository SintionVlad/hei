import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import {Block, Card, Button, Icon} from 'galio-framework';

export class Plan extends Component {
  render() {
    return (
    <Block flex>
        <Text style={styles.text}>Repayment plan</Text>
        <Card style={styles.DeutscheCard}>
        <View style={styles.viewColor}>
        <Icon
              style={styles.roundIcon} 
              name="minussquareo" 
              family="AntDesign" 
              color={'#000'} 
              size={25}         
         />
         </View>
        <Text style={styles.DeutscheText}>Deutsche Bank</Text>
        <Text style={styles.star}>****   ****   ****   5714</Text>
        </Card>

        <Card style={styles.credit}>
        <Icon
              style={styles.creditIcon} 
              name="credit-card-alt" 
              family="FontAwesome" 
              color={'#fff'} 
              size={50}         
         />
        <Text style={styles.amount}>Repayment amount</Text>
        <Text style={styles.amountNr}>$562.00</Text>
        </Card>
        
        <Text style={styles.Unpaid}>Unpaid bill</Text>
        <Icon
              style={styles.unpaidIcon} 
              name="keyboard-arrow-down" 
              family="MaterialIcons" 
              color={'#000'} 
              size={30}         
         />

         <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <Card style={styles.scrollCard1}>
                <Button shadowless style={styles.button1}>Repayment</Button>
                <Text style={styles.card1Nr}>$363.00</Text> 
                <Text style={styles.card1Amount}>Amount due (Overdue)</Text>
                <Text style={styles.minusLine}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                <Text style={styles.card1Date}>Repayment date : $215.00      Interest payable : $20.00</Text>   
            </Card>
                
            <Card style={styles.scrollCard2}>
                <Button shadowless style={styles.button2}>Repayment</Button>
                <Text style={styles.card2Nr}>$363.00</Text> 
                <Text style={styles.card2Amount}>Amount due (Overdue)</Text>
                <Text style={styles.minusLine2}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                <Text style={styles.card2Date}>Repayment date : $215.00      Interest payable : $20.00</Text>   
            </Card>
            
            <Text style={styles.analysis}>Repayment analysis</Text>
            
            <Card style={styles.scrollCard3}>
            <Button shadowless style={styles.button3}>Repayment</Button>
            <Text style={styles.card3Nr}>$363.00</Text> 
            <Text style={styles.card3Amount}>Amount due (Overdue)</Text>
            <Text style={styles.minusLine3}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
            <Text style={styles.card3Date}>Repayment date : $215.00      Interest payable : $20.00</Text>   
            </Card>
        </ScrollView>
    </Block>  
    )
  }
};

const styles = StyleSheet.create({
    text:{
        color:'#000',
        fontSize:27,
        marginLeft:15,
        fontWeight:"bold",
        paddingTop:40,
        marginTop:50
    },
    DeutscheCard:{
        alignSelf:'center', 
        width:350,
        height:120,
        marginTop:25,
        backgroundColor:'#3370ff',
        borderColor:'#3370ff',
        shadowColor:'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 5,   
    },
    DeutscheText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'700',
        alignSelf:'center',
        paddingBottom:19,
        paddingRight:36,
        marginTop:-33

    },
    star:{
        color:'#fff',
        alignSelf:'center',
        fontSize:24,
        fontWeight:'600',
        marginBottom:20,
        marginRight:-50
    },
    viewColor:{
        backgroundColor:'#fff',
        width:40,
        height:40,
        borderRadius:25,
        marginLeft:20
    },
    roundIcon:{
        marginTop:7,
        marginLeft:7
    },
    credit:{
        alignSelf:'center',
        width:350,
        height:90,
        backgroundColor:'#7698fc',
        borderColor:'#7698fc',
        shadowColor:'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 5, 
        marginTop:15, 
    },
    amount:{
        color:'#fff',
        fontSize:17,
        fontWeight:'500',
        alignSelf:'center',
        marginTop:-50,
        marginLeft:15

    },
    amountNr:{
        alignSelf:'center',
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        paddingRight:60,
        marginTop:5,
        marginBottom:17,
        marginLeft:15
        
    },
    creditIcon:{
        marginLeft:20,
        marginTop:-80
    },
    Unpaid:{
        fontSize:23,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:15
    },
    unpaidIcon:{
        alignSelf:'center',
        marginTop:-27,
        marginRight:70
    },
    scroll:{
        marginTop:10
    },
    scrollCard1:{
        alignSelf:'center',
        width:350,
        height:130,
        marginBottom:15,
        marginTop:5,
        shadowColor:'grey',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5, 
        backgroundColor:'#fff',
        borderColor:'#fff'  
    },
    button1:{
        alignSelf:'flex-end',
        width:130,
        height:35,
        borderRadius:50,
        backgroundColor:'#507dff',
        marginRight:15
        
    },
    card1Nr:{
        color:'#3370ff',
        fontSize:25,
        fontWeight:'500',
        paddingBottom:3,
        marginTop:-45,
        marginLeft:10,
    },
    card1Amount:{
        color:'#48545f',
        fontSize:15,
        marginLeft:10, 
        marginBottom:15       
        
    },
    minusLine:{
        color:'lavender',
        marginBottom:-5
    },
    card1Date:{
        alignSelf:'center',
        color:'grey',
        fontSize:13,
        marginBottom:15,
        marginTop:9,
       
        
    },
    scrollCard2:{
        alignSelf:'center',
        width:350,
        height:130,
        shadowColor:'grey',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5, 
        backgroundColor:'#fff',
        borderColor:'#fff'  
    },
    button2:{
        alignSelf:'flex-end',
        width:130,
        height:35,
        borderRadius:50,
        backgroundColor:'#507dff',
        marginRight:15
        
    },
    card2Nr:{
        color:'#3370ff',
        fontSize:25,
        fontWeight:'500',
        paddingBottom:3,
        marginTop:-45,
        marginLeft:10,
    },
    card2Amount:{
        color:'#48545f',
        fontSize:15,
        marginLeft:10, 
        marginBottom:15       
        
    },
    minusLine2:{
        color:'lavender',
        marginBottom:-5
    },
    card2Date:{
        alignSelf:'center',
        color:'grey',
        fontSize:13,
        marginBottom:15,
        marginTop:9
        
    },
    analysis:{
        fontSize:23,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:15,
        marginBottom:15,
        paddingBottom:10 
    },
    scrollCard3:{
        alignSelf:'center',
        width:350,
        height:130,
        marginBottom:15,
        shadowColor:'grey',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5, 
        backgroundColor:'#fff',
        borderColor:'#fff'  
    
    },
    button3:{
        alignSelf:'flex-end',
        width:130,
        height:35,
        borderRadius:50,
        backgroundColor:'#507dff',
        marginRight:15
    },
    card3Nr:{
        color:'#3370ff',
        fontSize:25,
        fontWeight:'500',
        paddingBottom:3,
        marginTop:-45,
        marginLeft:10,
    },
    card3Amount:{
        color:'#48545f',
        fontSize:15,
        marginLeft:10, 
        marginBottom:15       
        
    },
    minusLine3:{
        color:'lavender',
        marginBottom:-5
    },
    card3Date:{
        alignSelf:'center',
        color:'grey',
        fontSize:13,
        marginBottom:15,
        marginTop:9
    }

});

export default Plan;