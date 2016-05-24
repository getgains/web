import Ember from 'ember';

export
default Ember.Controller.extend({
    workoutController: Ember.inject.controller('workout.create'),
    workout: Ember.computed.reads('workoutController.workout'),
    actions: {
        addExercise(exercise) {

            let record = this.store.createRecord('set', {
                exercise: exercise,
                weight: 0,
                rep: 0,
                failure: false,
                assist: false
            });
            exercise.get('sets').pushObject(record);

            const workout = this.get('workout');
            workout.get('exercises').pushObject(exercise);

            this.transitionToRoute('workout.create');

        }
    }
});
