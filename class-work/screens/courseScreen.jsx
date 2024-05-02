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
                        <Text style={styles.textSmall}>Start a Course</Text>
                    </View>
                    <View style={styles.play}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/play.png')}
                        />
                    </View>
                </TouchableOpacity>
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
                            <Text style={styles.textSmall}>This is a course tha...</Text>
                        </View>
                        <View style={styles.play}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/play.png')}
                            />
                        </View>
                    </View>
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
        paddingTop: 80,
        paddingBottom: 40,
        padding: 30,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 450,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    textSmall: {
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
        borderRadius: 10,
    },
    play: {
        width: 50,
        height: 50,
        backgroundColor: '#FFC561',
        borderRadius: 10,
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
        fontSize: 48,
        fontWeight: '700',
        color: '#BBC0D3',
    }
});
