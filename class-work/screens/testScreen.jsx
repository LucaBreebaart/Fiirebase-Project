import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default function TestScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headertext}>Hello Ehan</Text>
                    <Image
                        style={styles.profile}
                        source={{
                            url: 'https://cdn.dribbble.com/userupload/14018379/file/original-7af4c40cab2f02316ef19861bcfc153b.jpg?resize=1024x768'
                        }}
                    />
                </View>

                <View>
                    <Text style={styles.heading}>Let's Learn Together!</Text>
                </View>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search What you need"
                        placeholderTextColor="#7179A7"
                    />
                    <View style={styles.search}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/search.png')}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.text}>Continue Course</Text>
                </View>

                <ImageBackground
                    source={{ uri: 'https://cdn.dribbble.com/userupload/14082679/file/original-bc80305d25778825e4aee7e473e6c6b7.jpg?resize=400x300&vertical=center' }}
                    style={styles.courseContainer}
                >
                    <View style={styles.MainCourse}>
                        <View>
                            <Text style={styles.MainCourseText}>To be professional marketeers!</Text>
                            <Text style={styles.MainCourseSubText}>Ready for a new challange and a new career</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>

                            <View>
                                <Image
                                    style={styles.buttonplay}
                                    source={require('../assets/play.png')}
                                />
                            </View>
                            <Text style={styles.buttonText}>
                                Lesson 3
                            </Text>

                        </TouchableOpacity>
                    </View>

                </ImageBackground>

                <View>
                    <Text style={styles.text}>Top Courses</Text>
                </View>

                <View style={styles.TopCourseContainer}>
                    <TouchableOpacity style={styles.courseContainerSmall} onPress={() => navigation.navigate('CourseScreen')}>

                        <View style={styles.TopCourseTextContainer}>
                            <Text style={styles.TopCourseText}>Maketing</Text>
                            <Text style={styles.TopCourseSubText}>14 Courses</Text>
                        </View>
                        <Image
                            style={styles.courseImage}
                            source={{
                                url: 'https://kuo-experience.com/wp-content/uploads/2020/07/experiencia-01.png'
                            }}
                        />
                    </TouchableOpacity>

                    <View style={[styles.courseContainerSmall, styles.two]}>
                        <View style={styles.TopCourseTextContainer}>
                            <Text style={styles.TopCourseText}>Design</Text>
                            <Text style={styles.TopCourseSubText}>14 Courses</Text>
                        </View>
                        <Image
                            style={styles.courseImage}
                            source={{
                                url: 'https://kuo-experience.com/wp-content/uploads/2020/07/producto-01.png'
                            }}
                        />
                    </View>

                    <View style={[styles.courseContainerSmall, styles.three]}>
                        <View style={styles.TopCourseTextContainer}>
                            <Text style={styles.TopCourseText}>Data Science</Text>
                            <Text style={styles.TopCourseSubText}>14 Courses</Text>
                        </View>
                        <Image
                            style={styles.courseImage}
                            source={{
                                url: 'https://kuo-experience.com/wp-content/uploads/2020/07/comunicacion-01.png'
                            }}
                        />
                    </View>

                    <View style={[styles.courseContainerSmall, styles.four]}>
                        <View style={styles.TopCourseTextContainer}>
                            <Text style={styles.TopCourseText}>UX</Text>
                            <Text style={styles.TopCourseSubText}>14 Courses</Text>
                        </View>
                        <Image
                            style={styles.courseImage}
                            source={{
                                url: 'https://kuo-experience.com/wp-content/uploads/2020/07/Identidad.png'
                            }}
                        />
                    </View>

                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingTop: 80,
        backgroundColor: 'white',
        padding: 20,
        gap: 30,
        overflow: 'scroll',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    text: {
        fontSize: 28,
        fontWeight: '600'
    },
    headertext: {
        fontSize: 26,
        fontWeight: '600'
    },
    profile: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    heading: {
        fontSize: 58,
        width: 420,
        fontWeight: '700'
    },
    searchContainer: {
        width: '100%',
        height: 70,
        backgroundColor: '#F9F9FB',
        paddingLeft: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
    },
    search: {
        width: 70,
        height: 70,
        backgroundColor: '#19256F',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
    },
    courseContainer: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
    },
    MainCourse: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    MainCourseText: {
        fontSize: 36,
        color: 'white',
        fontWeight: '700',
    },
    MainCourseSubText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400',
        width: 200,
        marginTop: 20,
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#19256E',
        paddingRight: 22,
        paddingLeft: 15,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400',
    },
    buttonplay: {
        width: 25,
        height: 25,
    },
    TopCourseContainer: {
        display: 'flex',
        height: 'auto',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 20,
    },
    TopCourseTextContainer: {
        padding: 14,
    },
    courseContainerSmall: {
        width: '47%',
        height: 300,
        borderRadius: 20,
        backgroundColor: '#FEBDDD',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
    },
    two: {
        backgroundColor: '#8A9AFC',
    },
    three: {
        backgroundColor: '#26AC6D',
    },
    four: {
        backgroundColor: '#19256F',
    },
    TopCourseText: {
        fontSize: 36,
        color: 'white',
        fontWeight: '700',
    },
    TopCourseSubText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '400',
        width: 200,
    },
    TopCourseImage: {
        width: '100%',
        height: 'auto',
    },
    courseImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '50%',
    }


});
