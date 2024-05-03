import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function CourseScreen() {
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/arrow.png')}
                    />
                    <View>
                        <Text style={styles.headertext}>Data Science</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../assets/save.png')}
                    />
                </View>
                <TouchableOpacity style={styles.startCourseButton}>
                    <View style={styles.ButtonText}>
                        <Text style={styles.textSmall2}>Start a Course</Text>
                    </View>
                    <View style={styles.play}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/play.png')}
                        />
                    </View>
                </TouchableOpacity>
                <Image
                    style={styles.headerimage}
                    source={{
                        url: 'https://kuo-experience.com/wp-content/uploads/2020/07/experiencia-01.png'
                    }}
                />
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Course Details</Text>
                </View>

                <View style={styles.CoursesContainer}>
                    <View style={styles.CoursesDetails}>
                        <Text style={styles.CourseNumber}>01</Text>
                        <View style={styles.CourseTextContainer}>
                            <Text style={styles.textSmall}>Introduction</Text>
                            <Text style={styles.textSmall2}>This is a course tha...</Text>
                        </View>
                        <View style={styles.play2}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/play-course.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.CoursesDetails}>
                        <Text style={styles.CourseNumber}>02</Text>
                        <View style={styles.CourseTextContainer}>
                            <Text style={styles.textSmall}>Chaptor One</Text>
                            <Text style={styles.textSmall2}>This is a course tha...</Text>
                        </View>
                        <View style={styles.play2}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/play-course.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.CoursesDetails}>
                        <Text style={styles.CourseNumber}>03</Text>
                        <View style={styles.CourseTextContainer}>
                            <Text style={styles.textSmall}>Chaptor Two</Text>
                            <Text style={styles.textSmall2}>This is a course tha...</Text>
                        </View>
                        <View style={styles.play2}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/play-course.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.CoursesDetails}>
                        <Text style={styles.CourseNumber}>04</Text>
                        <View style={styles.CourseTextContainer}>
                            <Text style={styles.textSmall}>Chaptor Three</Text>
                            <Text style={styles.textSmall2}>This is a course tha...</Text>
                        </View>
                        <View style={styles.play2}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/play-course.png')}
                            />
                        </View>
                    </View>

                </View>

                <View>

                    <TouchableOpacity style={styles.buttonContainer}>

                        <View style={styles.cart}>
                            <Image
                                style={styles.icon2}
                                source={require('../assets/cart.png')}
                            />
                        </View>

                        <View style={styles.button}>
                            <Text style={styles.buttontext2}>Buy Now</Text>
                        </View>

                    </TouchableOpacity>

                </View>

            </View>



            <StatusBar style="auto" />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        gap: 30,
        overflow: 'scroll',
        marginTop: 20,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    headerContainer: {
        backgroundColor: '#8A9AFC',
        width: '100%',
        paddingTop: 60,
        paddingBottom: 40,
        padding: 30,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 500,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'relative',
        overflow: 'hidden',
    },
    textSmall: {
        fontSize: 20,
        fontWeight: '600'
    },
    textSmall2: {
        fontSize: 18,
        fontWeight: '400'
    },
    text: {
        fontSize: 28,
        fontWeight: '600'
    },
    headertext: {
        top: 50,
        fontSize: 28,
        fontWeight: '600',
        color: 'white',
    },
    profile: {
        width: 53,
        height: 53,
        borderRadius: 50,
    },
    heading: {
        fontSize: 58,
        width: 420,
        fontWeight: '700'
    },
    startCourseButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#F9F9FB',
        paddingLeft: 20,
        paddingRight: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        position: 'relative',
        zIndex: 20,
    },
    play: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC561',
        borderRadius: 10,
    },
    play2: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 18,
    },
    icon: {
        width: 35,
        height: 35,
    },
    CoursesContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: 10,
    },
    CourseTextContainer: {
        width: 200,
        display: 'flex',
        gap: 2,
        overflow: 'hidden',
    },
    CoursesDetails: {
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    CourseNumber: {
        fontSize: 38,
        fontWeight: '700',
        color: '#BBC0D3',
    },
    headerimage: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 0,
        width: '100%',
        height: '80%',
    },

    // buttons

    headerimage: {
        position: 'absolute',
        bottom: 0,
        left: 30,
        right: 0,
        width: '100%',
        height: '80%',
    },
    buttonContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#F9F9FB',
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        position: 'relative',
        zIndex: 20,
        gap: 10,
    },
    cart: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEEED4',
        borderRadius: 50,
    },
    icon2: {
        width: 20,
        height: 20,
    },
    button: {
        width: '80%',
        height: '100%',
        backgroundColor: '#19256F',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext2: {
        fontSize: 18,
        color: 'white',
    }
});
