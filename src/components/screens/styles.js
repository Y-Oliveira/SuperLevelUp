import { StyleSheet, Image } from "react-native";

export const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    
///tabs color

      tabsColor0:{
      backgroundColor:'#540EAF50',  
      },
      tabsColor1:{
        backgroundColor:'#E8228250',  
      },
      tabsColor2:{
        backgroundColor:'#C9262650',  
      },
      tabsColor3:{
        backgroundColor:'#A731C650',  
      },

///Content

      customSearchArea:{
        height:80,
        backgroundColor:'pink',
       },

      customSearchInput:{
        width:'90%',
        height:40,
        backgroundColor:'#C9262650',
      },

      estiloInput: {
        backgroundColor: "#880E4F30",
        color: "#222222",
        minHeight: "10%",
        width: "80%",
        borderRadius: 8,
        borderColor:'#880E4F',
        borderWidth:1,
        padding: "5%",
      },
///  Font Styles

      customTextInput:{
        fontSize:14,
        color:'gray',
        paddingLeft:10,
      },



    });
