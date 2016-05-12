import Ember from 'ember';

export
default Ember.Controller.extend({
    workoutController: Ember.inject.controller('workout.create'),
    workout: Ember.computed.reads('workoutController.workout'),
    actions: {
        addExercise(exercise) {

            let workout = this.get('workout');
            workout.get('exercises').pushObject(exercise);
            this.transitionToRoute('workout.create');

        }
    }
});
