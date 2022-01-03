module Marketing
  class CampaignsController < ApplicationController
    def instacart
    	Slacker.perform_async("Campaign", "Instacart", "Flyer")
    	redirect_to "/"
    end
  end
end