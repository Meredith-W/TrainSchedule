// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAXybABEnEVxuqt0hzWH24X4lu5v4IFC6A",
    authDomain: "trainscheduler-3a6d9.firebaseapp.com",
    databaseURL: "https://trainscheduler-3a6d9.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "419342689586"
  };
  firebase.initializeApp(config);

    // Current Time
    var currentTime = moment().format('h:mm A');
    $('#currentTime').html("The time is : " + currentTime);
    
    var name = "";
    var destination = "";
    var firstTrainTime = "";
    var frequency = 0;
    

   $('#my-form').on('submit', function() {
    
    name = $('#nameinput').val().trim();
    destination = $('#destinationinput').val().trim(); 
    firstTrainTime = $('#firstTraininput').val().trim();
    frequency = $('#frequencyinput').val().trim();
    
    //Push data to firebase  
    dataRef.ref().push({
      name : name;
      destination: destination;
      firstTrainTime: firstTrainTime;
      frequency: frequency;

  });
      return false;
  });

      var firstTimeConverted = moment(firstTrainTime,"hh:mm").subtract(1, "years");

fb.on("child_added", function(snapshot) {
    var firstTimeConverted = moment(firstTrainTime,"hh:mm").subtract(1, "years");
    console.log("firstTimeConverted" + snapshot.val(firstTrainTime))
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + snapshot.val(diffTime));
    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log("Frequency" + snapshot.val(tRemainder);
    // Minutes Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + snapshot.val(tMinutesTillTrain));
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes")
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))
  }