import React from 'react';

const OperatingHoursStep = ({ formData, updateFormData, onNext, onBack }) => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const handleHourChange = (day, field, value) => {
    const updatedHours = { ...formData.hours };
    updatedHours[day] = { ...updatedHours[day], [field]: value };
    
    // If useSameHours is true, update all other days if we are changing monday's time
    if (formData.useSameHours && day === 'monday' && (field === 'start' || field === 'end')) {
      days.forEach(d => {
        if (d !== 'monday') {
          updatedHours[d] = { ...updatedHours[d], [field]: value };
        }
      });
    }

    updateFormData({ hours: updatedHours });
  };

  const handleSameHoursChange = (e) => {
    const checked = e.target.checked;
    updateFormData({ useSameHours: checked });
    
    if (checked) {
      // Sync all open days to Monday's hours
      const mondayHours = formData.hours.monday;
      const updatedHours = { ...formData.hours };
      
      days.forEach(d => {
        if (d !== 'monday' && !updatedHours[d].closed) {
          updatedHours[d] = { 
            ...updatedHours[d], 
            start: mondayHours.start, 
            end: mondayHours.end 
          };
        }
      });
      
      updateFormData({ hours: updatedHours });
    }
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-sm font-semibold tracking-widest text-[#00D3F3] uppercase mb-2">Step 2 – Calai Operating Hours</h2>
        <h3 className="text-2xl font-bold text-white mb-2">When would you like Calai to answer your calls?</h3>
        <p className="text-gray-400 text-sm">
          Choose the days and times that Calai should be available to answer customer calls.<br/>
          Outside of these hours, Calai will remain offline and your normal phone setup will continue as usual.
        </p>
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={formData.useSameHours}
              onChange={handleSameHoursChange}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-[#1a1a1a] checked:bg-[#9810FA] checked:border-[#9810FA] transition-all cursor-pointer"
            />
            <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            Use same hours for all days
          </span>
        </label>
      </div>

      {formData.useSameHours ? (
        <div className="animate-in fade-in duration-300 space-y-6 mb-8">
          <div className="p-6 bg-[#0A0F24] border border-[#1C398E]/50 rounded-[1.5rem] shadow-inner">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Opening Time</label>
                <input
                  type="time"
                  value={formData.hours.monday.start}
                  onChange={(e) => handleHourChange('monday', 'start', e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C27AFF] transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Closing Time</label>
                <input
                  type="time"
                  value={formData.hours.monday.end}
                  onChange={(e) => handleHourChange('monday', 'end', e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C27AFF] transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-300 mb-1">
                Off Days (Select closed days)
              </label>
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleHourChange(day, 'closed', !formData.hours[day].closed)}
                    className={`px-4 py-2 rounded-full text-[13px] transition-all font-medium border cursor-pointer
                        ${
                          formData.hours[day].closed
                            ? "bg-red-500/10 border-red-500/50 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                            : "bg-[#111] border-white/10 text-gray-400 hover:border-white/20"
                        }
                      `}
                  >
                    {capitalize(day)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3 mb-8">
          {days.map((day) => (
            <div key={day} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#111] border border-white/5 rounded-xl hover:border-white/10 transition-colors gap-4">
              <div className="flex items-center gap-4 w-32">
                <span className="text-white font-medium">{capitalize(day)}</span>
              </div>
              
              <div className="flex-1 flex items-center gap-3">
                <input
                  type="time"
                  disabled={formData.hours[day].closed}
                  value={formData.hours[day].start}
                  onChange={(e) => handleHourChange(day, 'start', e.target.value)}
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C27AFF] disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-[120px] [color-scheme:dark]"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="time"
                  disabled={formData.hours[day].closed}
                  value={formData.hours[day].end}
                  onChange={(e) => handleHourChange(day, 'end', e.target.value)}
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C27AFF] disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-[120px] [color-scheme:dark]"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hours[day].closed}
                    onChange={(e) => handleHourChange(day, 'closed', e.target.checked)}
                    className="peer appearance-none w-4 h-4 border border-white/20 rounded bg-[#1a1a1a] checked:bg-red-500 checked:border-red-500 transition-all cursor-pointer"
                  />
                  <span className="text-sm text-gray-400 peer-checked:text-red-400">Closed</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-white/5">
        <button
          onClick={onBack}
          className="px-8 py-3 rounded-full font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-full font-medium transition-all bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white border border-[#0F42FF] shadow-[0_0_15px_rgba(15,66,255,0.4)] hover:shadow-[0_0_20px_rgba(15,66,255,0.6)] cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default OperatingHoursStep;
