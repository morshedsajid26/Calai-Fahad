import React, { useState, useRef } from 'react'
import { Mail, Lock, Edit2, Camera } from 'lucide-react'
import InputField from '../../../components/Inputfield'
import Password from '../../../components/Password'

const ProfileSettings = () => {
  const [isProfileEditing, setIsProfileEditing] = useState(false)
  const [isPasswordEditing, setIsPasswordEditing] = useState(false)
  
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/32.jpg')
  const fileInputRef = useRef(null)

  const handleImageClick = () => {
    if (isProfileEditing) {
      fileInputRef.current?.click()
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setProfileImage(url)
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-xl font-semibold text-white mb-1">Profile Settings</h2>
      <p className="text-sm text-gray-400 mb-8">Update your personal information</p>

      <div className="bg-[#191919] p-6 rounded-xl border border-white/5 mb-8">
        {/* Profile Image */}
        <div className="relative w-20 h-20 mb-8">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover border-2 border-white/10"
          />
          {isProfileEditing && (
            <button 
              onClick={handleImageClick}
              className="absolute bottom-0 right-0 bg-[#252525] p-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Camera className="w-3 h-3 text-white" />
            </button>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <InputField 
            label="First Name"
            placeholder="First name"
            readOnly={!isProfileEditing}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !px-5 !py-3.5 !text-sm ${!isProfileEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
          />
          <InputField 
            label="Last Name"
            placeholder="Last name"
            readOnly={!isProfileEditing}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !px-5 !py-3.5 !text-sm ${!isProfileEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
          />
        </div>

        <div className="mb-8">
          <InputField 
            label="Email"
            type="email"
            placeholder="Enter Email"
            readOnly={!isProfileEditing}
            leftIcon={<Mail className="w-4 h-4" />}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !pl-12 !pr-5 !py-3.5 !text-sm ${!isProfileEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          {!isProfileEditing ? (
            <button 
              onClick={() => setIsProfileEditing(true)}
              className="px-10 py-2.5 rounded-full border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all"
            >
              Edit
            </button>
          ) : (
            <>
              <button 
                onClick={() => setIsProfileEditing(false)}
                className="px-8 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsProfileEditing(false)}
                className="px-8 py-2.5 rounded-full border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all"
              >
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>

      {/* Change Password */}
      <h2 className="text-xl font-semibold text-white mb-1">Change Password</h2>
      <p className="text-sm text-gray-400 mb-8">Update your password regularly to keep your account secure.</p>

      <div className="bg-[#191919] p-6 rounded-xl border border-white/5 mb-8">
        <div className="mb-6">
          <Password 
            label="Current Password"
            placeholder="Enter Password"
            readOnly={!isPasswordEditing}
            leftIcon={<Lock className="w-4 h-4" />}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !pl-12 !pr-5 !py-3.5 !text-sm ${!isPasswordEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
            icon="!text-gray-400 hover:!text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Password 
            label="New Password"
            placeholder="Enter Password"
            readOnly={!isPasswordEditing}
            leftIcon={<Lock className="w-4 h-4" />}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !pl-12 !pr-5 !py-3.5 !text-sm ${!isPasswordEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
            icon="!text-gray-400 hover:!text-white"
          />
          <Password 
            label="Confirm New Password"
            placeholder="Enter Password"
            readOnly={!isPasswordEditing}
            leftIcon={<Lock className="w-4 h-4" />}
            labelClass="!text-sm !font-medium !text-gray-300"
            inputClass={`!bg-[#111111] !border-white/5 !rounded-full !pl-12 !pr-5 !py-3.5 !text-sm ${!isPasswordEditing ? '!text-gray-500 cursor-default' : '!text-white'} placeholder:!text-gray-600 focus:!outline-none focus:!border-blue-500/50`}
            icon="!text-gray-400 hover:!text-white"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          {!isPasswordEditing ? (
            <button 
              onClick={() => setIsPasswordEditing(true)}
              className="px-10 py-2.5 rounded-full border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all"
            >
              Edit
            </button>
          ) : (
            <>
              <button 
                onClick={() => setIsPasswordEditing(false)}
                className="px-8 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsPasswordEditing(false)}
                className="px-8 py-2.5 rounded-full border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all"
              >
                Save new password
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
