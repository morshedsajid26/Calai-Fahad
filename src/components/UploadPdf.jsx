import React, { useState, useRef } from 'react'
import { CloudUpload, FileText, X, Loader2 } from 'lucide-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useAxiosSecure from '../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import Dropdown from './Dropdown'

const UploadPdf = () => {
  const [files, setFiles] = useState([])
  const [agentName, setAgentName] = useState('')
  const [voiceId, setVoiceId] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  
  const axiosSecure = useAxiosSecure()
  const queryClient = useQueryClient()

  const { data: voicesData, isLoading: isLoadingVoices } = useQuery({
    queryKey: ['voices'],
    queryFn: async () => {
      const res = await axiosSecure.get('/voices')
      return res.data
    }
  })

  const createAgentMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosSecure.post('/agent/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    },
    onSuccess: () => {
      toast.success('Agent created and provisioned successfully')
      setFiles([])
      setAgentName('')
      setVoiceId('')
      queryClient.invalidateQueries(['recentAgents'])
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Failed to create agent')
    }
  })

  const processFiles = (newFiles) => {
    const validFiles = Array.from(newFiles).filter(
      (file) => 
        file.type === 'application/pdf' || 
        file.name.endsWith('.pdf') ||
        file.name.endsWith('.xlsx') || 
        file.name.endsWith('.xls') || 
        file.name.endsWith('.csv') ||
        file.type.includes('excel') || 
        file.type.includes('spreadsheet') || 
        file.type.includes('csv')
    )
    
    if (validFiles.length !== newFiles.length) {
      toast.error('Some files were rejected. Please select valid PDF or Excel files only.')
    }
    
    if (validFiles.length > 0) {
      if (files.length + validFiles.length > 3) {
        toast.error('Maximum 3 files allowed (Rules, Menu, Special Offers)')
        return
      }
      setFiles((prev) => [...prev, ...validFiles])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files)
    }
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const removeFile = (e, indexToRemove) => {
    e.stopPropagation()
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleApply = () => {
    if (!agentName.trim()) {
      toast.error('Please enter an agent name')
      return
    }
    if (!voiceId) {
      toast.error('Please select a voice')
      return
    }
    if (files.length < 2) {
      toast.error('Please upload at least 2 files (Rules File & Menu File)')
      return
    }

    const formData = new FormData()
    formData.append('agent_name', agentName)
    formData.append('voice_id', voiceId)
    formData.append('rules_file', files[0])
    formData.append('menu_file', files[1])
    
    if (files[2]) {
      formData.append('special_offers_file', files[2])
    }

    createAgentMutation.mutate(formData)
  }

  return (
    <div className="bg-[#191919] p-6 rounded-xl border border-white/5 relative">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-white mb-2">Create AI Agent</h2>
        <p className="text-sm text-gray-400 mb-6">
          Upload documents (PDF or Excel) with text that will be used to train your AI text model. <br/>
         
        </p>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Agent Name</label>
            <input 
              type="text" 
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              placeholder="e.g. Offer offer burger 2"
              className="w-full bg-[#111111] border border-[#272727] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <Dropdown
              label="Voice"
              placeholder={isLoadingVoices ? 'Loading voices...' : 'Select a voice'}
              options={voicesData?.voices?.map((voice) => voice.name) || []}
              value={voicesData?.voices?.find(v => v.id === voiceId)?.name || ''}
              onSelect={(val) => {
                const selectedVoice = voicesData?.voices?.find(v => v.name === val)
                if (selectedVoice) setVoiceId(selectedVoice.id)
              }}
              labelClass="!text-sm !font-medium !text-gray-300"
              inputClass={`!bg-[#111111] !border-[#272727] !text-white !text-sm !rounded-xl !px-4 !py-3 focus:!border-blue-500 !transition-colors ${isLoadingVoices ? 'opacity-50 pointer-events-none' : ''}`}
              optionClass="!bg-[#111111] !border-[#272727] !text-gray-300"
              icon="!text-gray-400"
            />
          </div>
        </div>
      </div>

      <div 
        className={`border border-dashed rounded-xl p-10 flex flex-col items-center justify-center bg-[#1a1a1a]/50 mb-16 transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 hover:border-white/20'
        } cursor-pointer min-h-[250px]`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept=".pdf,.xlsx,.xls,.csv" 
          multiple
          className="hidden" 
        />

        {files.length > 0 ? (
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center w-full max-h-[200px] overflow-y-auto p-2">
              {files.map((file, index) => {
                const label = index === 0 ? "Rules" : index === 1 ? "Menu" : "Offers";
                return (
                  <div 
                    key={index} 
                    className="relative flex flex-col items-center bg-[#252525] p-3 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="absolute -top-3 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full z-10">
                      {label}
                    </div>
                    <FileText className="w-8 h-8 text-blue-400 mb-2 mt-1" />
                    <button 
                      onClick={(e) => removeFile(e, index)}
                      className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100 shadow-lg"
                      title="Remove file"
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                    <h3 className="text-xs text-gray-200 truncate w-20 text-center" title={file.name}>
                      {file.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                )
              })}
            </div>
            {files.length < 3 && (
              <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                <CloudUpload className="w-4 h-4" />
                <span>Click or drag to add more files</span>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <CloudUpload className={`w-10 h-10 ${isDragging ? 'text-blue-400' : 'text-gray-400'}`} strokeWidth={1.5} />
            </div>
            <h3 className="text-base text-gray-200 mb-1">
              {isDragging ? 'Drop files here' : 'Drag and drop files here'}
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">or click to browse files from your computer</p>
            
            <button className="px-8 py-2 rounded-full border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all pointer-events-none">
              Browse Files
            </button>
          </>
        )}
      </div>

      <div className="absolute bottom-6 right-6">
        <button 
          onClick={handleApply}
          className={`px-6 py-2.5 rounded-full text-sm transition-all flex items-center gap-2 ${
            files.length >= 2 && agentName.trim() && voiceId
              ? 'border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] cursor-pointer' 
              : 'border border-blue-600/50 bg-[#0a0a2a] text-gray-400 cursor-not-allowed opacity-50'
          }`}
          disabled={files.length < 2 || !agentName.trim() || !voiceId || createAgentMutation.isPending}
        >
          {createAgentMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {createAgentMutation.isPending ? 'Creating Agent...' : 'Create Agent'}
        </button>
      </div>
    </div>
  )
}

export default UploadPdf
