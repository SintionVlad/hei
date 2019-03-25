import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { Icon,Card,Button,  Block} from 'galio-framework';


class Screen1 extends React.Component {
    render() {
      return (
        <Block flex >
        <View style={styles.container}>
          <View style={styles.chatIcon}>
            <Icon 
            name="chat" 
            family="MaterialIcons" 
            color={'#fff'} 
            size={25} />
            </View>
          <View style={styles.scannerIcon}>
            <Icon 
            name="md-qr-scanner" 
            family="Ionicons" 
            color={'#fff'} 
            size={25} />
            </View>
            <Text style={styles.text}>Repayment</Text>
        </View>
        
                <Card style={styles.bigCard}>  
                    <Text style={styles.Current}>Current amount due</Text>
                    <Text style={styles.bigNumbers}>$874.00</Text> 
                    <Text style={styles.date}>Repayment date</Text>
                    <Text style={styles.dateNumber}>2018-01-10</Text>
                    <Text style={styles.amount}>Repayment amount</Text>
                    <Text style={styles.amountNumber}>$563.00</Text>
                    <Text style={styles.bank}>Bank card</Text>
                    <Icon
                    style={styles.bankIcon} 
                    name="check" 
                    family="EvilIcons" 
                    color={'#000'} 
                    size={20}/>
                    <Text style={styles.digits}>Last 4 digits0618</Text>            
                    <Button style={styles.cardButton} 
                    onPress={() => this.props.navigation.navigate('Plan')}
                    >REPAYMENT</Button>
                </Card>

                     <Text style={styles.notYet}>Remaining not yet</Text>

                <Card style={styles.threeCards} >
                    <View style={styles.row}>
                    <Card style={styles.Surplus}>
                    <Text style={styles.textSurplus}>Surplus</Text>
                    <Text style={styles.surplusNumber}>$874.00</Text>
                    </Card>

                    <Card style={styles.Installments}>
                    <Text style={styles.textInstallments}>Installments</Text>
                    <Text style={styles.installmentsNumber}>02/24</Text>
                    </Card>

                    <Card style={styles.Details}>
                    <Text style={styles.textView}>View </Text>
                    <Text style={styles.textDetails}>details</Text>
                    
                    <Icon
                        style={styles.arrowIcon} 
                        name="arrowright" 
                        family="AntDesign" 
                        color={'#fff'} 
                        size={23}
                        
                        />
                    </Card>
                    </View>

                    <Card style={styles.earlyCard}>
                        <Icon
                        style={styles.bellIcon} 
                        name="bell" 
                        family="EvilIcons" 
                        color={'#000'} 
                        size={30}/>
                        <Text style={styles.earlyText}>Early Repayment</Text>
                        <Text style={styles.repayText}>Repay all bills in advance</Text>
                        <Text style={styles.earlyNumber}>0.28%</Text>
                        <Text style={styles.reducedText}>Can be reduced</Text>
                    </Card>

                    <Card style={styles.earlyCard}>
                    <Icon
                        style={styles.pencilIcon} 
                        name="pencil" 
                        family="SimpleLineIcons" 
                        color={'#000'} 
                        size={22}/>
                        <Text style={styles.recordText}>Repayment record</Text>
                        <Text style={styles.billsText}>Repay all bills in advance</Text>
                    </Card>
                </Card>
            </Block>

               
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3a69f0',
        height:200,
        justifyContent:'center',
        
    },
    text:{
        color:'#fff',
        fontSize:27,
        marginLeft:15,
        fontWeight:"bold"
        
    },
    chatIcon:{
      justifyContent:'center',
      alignItems:'flex-end',
      marginRight:15,
      marginTop:-25,
      paddingBottom:10
    },
    scannerIcon:{
      justifyContent:'center',
      alignItems:'flex-start',
      marginLeft:15,
      marginTop: -40,
      marginBottom:5

    },
    bigCard:{
        width:350,
        height:250,
        alignSelf:'center',
        marginTop:-55,
        backgroundColor:'#fff',
        borderColor:'#fff',
        shadowColor:'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,   
    },
    Current:{
        color:"grey",
        marginLeft:10,
        marginTop:-10
        
        
    },
    bigNumbers:{
        fontSize:30,
        fontWeight:"bold",
        marginLeft:10,
        
        marginBottom:14

    },
    date:{
        color:"grey",
        marginLeft:10,
        marginTop:10
    },
    dateNumber:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:5
    },
    amount:{
        color:"grey",
        alignSelf:'flex-end',
        marginRight:10,
        marginTop:-42
        
    },
    amountNumber:{
        fontSize:18,
        fontWeight:"bold",
        marginRight:10,
        marginTop:5,
        alignSelf:'flex-end',
        
    },
    bank:{
        color:"grey",
        alignSelf:'flex-start',
        marginLeft:10,
        marginTop:10,
        marginBottom:2
       
    },
    digits:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:35,
        paddingTop:-30,
        marginTop:-20,
        alignSelf:'flex-start',
        marginBottom:4
    },
    bankIcon:{
        marginLeft:10,
        marginTop:5,    
    },
    cardButton:{
        width:350,
        marginTop:10,
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        backgroundColor:'#3e7aff',
        shadowColor:'#3e7aff'
    },
    notYet:{
        marginLeft:15,
        paddingTop:20,
        fontSize:18,
        fontWeight:"bold",
    },
    threeCards:{
        width:350,
        height:120,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginTop:10,
        shadowColor:'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderColor:'#fff'
        
    },
    Surplus:{
        width:100,
        height:100,
        marginTop:-14,
        marginRight:10,
        backgroundColor:'#e0e9ff',
        borderColor:'#fff'
    },
    textSurplus:{
        color:'#3864ff',
        fontSize:15,
        marginTop:-15,
        marginLeft:10,
        paddingBottom:70,
    },
    surplusNumber:{
        marginTop:-65,
        marginBottom:90,
        fontWeight:'bold',
        color:'#3864ff',
        marginLeft:10,
        fontSize:18
    },
    Installments:{
        width:100,
        height:100,
        marginTop:-14,
        marginBottom:10,
        backgroundColor:'#fe2272',
        borderColor:'#fff'
    },
    textInstallments:{
        color:'#fff',
        fontSize:15,
        marginTop:-15,
        marginLeft:8,
        paddingBottom:70,
    },
    installmentsNumber:{
        marginTop:-65,
        marginBottom:90,
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        marginLeft:10
    },
    Details:{
        width:100,
        height:100,
        marginTop:-14,
        marginLeft:10,
        backgroundColor:'#6987e7',
        borderColor:'#fff'
    },
    textView:{
        color:'#fff',
        fontSize:20,
        fontWeight:"600",
        marginTop:-15,
        marginBottom:-10,
        marginLeft:7,
        paddingBottom:80,
    },
    textDetails:{
        color:'#fff',
        fontSize:20,
        fontWeight:"600",
        marginTop:-70,
        marginLeft:7,
        paddingBottom:85,
    },
    
    row:{
        flexDirection:'row',
        alignSelf:'center',    
    },
    earlyCard:{
        width:350,
        height:90,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginTop:10,
        shadowColor:'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderColor:'#fff'
    },
    earlyText:{
        fontWeight:"500",
        fontSize:17,
        alignSelf:'center',
        marginBottom:10,
        paddingRight:75,
        paddingBottom:40,
    },
    repayText:{
        color:"grey",
        alignSelf:'center',
        paddingRight:65,
        marginTop:-47,
        paddingBottom:20,
        fontSize:12
        
    },
    earlyNumber:{
        alignSelf:'flex-end',
        color:'#3864ff',
        fontWeight:"600",
        fontSize:19,
        marginTop:-57,
        paddingBottom:55,
        paddingRight:20,
    },
    reducedText:{
        alignSelf:'flex-end',
        color:'grey',
        fontSize:11,
        marginTop:-53,
        marginBottom:5,
        paddingBottom:55,
        paddingRight:20,
    },
    recordText:{
        fontWeight:"500",
        fontSize:17,
        alignSelf:'center',
        marginBottom:10,
        paddingRight:60,
        paddingBottom:40,
    },
    billsText:{
        color:"grey",
        alignSelf:'center',
        paddingRight:62,
        marginTop:-47,
        paddingBottom:25,
        fontSize:12
    },
    bellIcon:{
        marginLeft:20,
        marginTop:10,
        marginBottom:-35  
    },
    pencilIcon:{
        marginLeft:20,
        marginBottom:-35  
    },
    arrowIcon:{
        alignSelf:'flex-end',
        marginTop:-70,
        marginRight:10
    }

});

export default Screen1;