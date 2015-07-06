angular
	.module('mobileTrainer')

// fetching firebase data

	.factory('Pump', function (T_APP) {
		return {
			getArms(cb) {
				$http
					.get(T_APP + 'targetgroup/arms')
					.success(cb)
			},
			getBack(cb) {
				$http
					.get(T_APP + 'targetgroup/back')
					.success(cb)
			},
			getChest(cb) {
				$http
					.get(T_APP + 'targetgroup/chest')
					.success(cb)
			},
			getLegs(cb) {
				$http
					.get(T_APP + 'targetgroup/legs')
					.success(cb)
			},
            getShoulders(cb) {
				$http
					.get(T_APP + 'targetgroup/shoulders')
					.success(cb)
			}


		};
	})