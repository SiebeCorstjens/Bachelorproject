using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace FestiTimer.Domain.Models.States
{
    public class StateFactory
    {
        public static State GetState(string stateTypeName, Workshift workshift)
        {
            var list = FindAllDerivedStates();
            dynamic returnedValue = null;

            foreach (var state in list)
            {
                if (state.Name == stateTypeName) returnedValue = Activator.CreateInstance(state, workshift);
            }

            return returnedValue;
        }

        private static IEnumerable<Type> FindAllDerivedStates()
        {
            var derivedType = typeof(State);
            var assembly = Assembly.GetAssembly(typeof(State));
            return assembly.GetTypes().Where(t => t != derivedType && derivedType.IsAssignableFrom(t)).ToList();
        }
    }
}
